import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

// @gitian TodoItem — renders a single todo with toggle and delete controls
/**
 * @param props.todo - The todo data to render
 * @param props.onToggle - Callback to toggle completed state
 * @param props.onDelete - Callback to remove the todo
 */
export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  /* @gitian
   * Event handlers — onToggle flips the completed state via the
   * parent's state setter; onDelete removes the todo entirely.
   * Both are lifted from the useTodos hook through the App component.
   */
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          flex: 1,
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#888" : "inherit",
        }}
      >
        {todo.text}
      </span>
      {/* @gitian:todo Add a confirmation dialog before deleting */}
      {/* @gitian:deprecated Replace inline delete button with swipe-to-delete gesture */}
      <button onClick={() => onDelete(todo.id)} style={{ cursor: "pointer" }}>
        Delete
      </button>
    </li>
  );
}
