import type { Todo } from "../types";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

/* @gitian
 * --id=zrm3xc
 * TodoList — renders the array of todos sorted by creation date
 * (newest first). Maps each todo to a TodoItem component.
 */
export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  // @gitian:perf Copies and re-sorts the full array on every render — consider useMemo
  // --id=ts4xe8
  // HACK: spreading to avoid mutating props — need a proper immutable sort utility
  const sorted = [...todos].sort((a, b) => b.createdAt - a.createdAt);

  if (sorted.length === 0) {
    return <p style={{ color: "#888" }}>No todos yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {sorted.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
