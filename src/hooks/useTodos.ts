import { useState, useEffect } from "react";
import type { Todo } from "../types";

const STORAGE_KEY = "gitian-demo-todos";

/* @gitian
 * --id=clnsv6
 * --group=api
 * useTodos hook — encapsulates all todo CRUD operations and
 * localStorage persistence. Returns a stable API that the App
 * component consumes without needing to know about storage details.
 */
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  // @gitian:bug JSON.parse without validation — malicious storage data could crash the app
  // --group=global
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  /** @param text - The todo item text to add */
  function addTodo(text: string) {
    setTodos((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: Date.now(),
      },
    ]);
  }

  /** @param id - The todo ID to toggle completed state */
  function toggleTodo(id: string) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  // FIXME: no undo support — deleted todos are gone forever
  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  // @gitian:todo Add an `editTodo` function for inline text editing
  // --group=api
  return { todos, addTodo, toggleTodo, deleteTodo };
}
