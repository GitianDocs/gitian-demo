import { useTodos } from "./hooks/useTodos";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";

/* @gitian
 * --group=global
 * App component — the root of the todo application. Composes the
 * AddTodo form and TodoList display. All state is managed by the
 * useTodos hook, keeping this component purely presentational.
 */
export function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  // @gitian Filter counts used in the header summary
  const completed = todos.filter((t) => t.completed).length;

  return (
    // @gitian Root layout — centers the app at 480px max width
    <div
      style={{ maxWidth: 480, margin: "2rem auto", fontFamily: "system-ui" }}
    >
      {/* @gitian:warning Heading and summary are not wrapped in a semantic
        * landmark — screen readers may miss the todo count. Consider using
        * an aria-live region for the completed counter.
        * --id=b3t01z */}
      <h1>Todo App</h1>
      <p>
        {completed}/{todos.length} completed
      </p>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
