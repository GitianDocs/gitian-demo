import { useState } from "react";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

// @gitian AddTodo form — controlled input with submit-on-enter and button click
/** @param props.onAdd - Callback fired with the trimmed text when user submits */
export function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState("");

  /* @gitian
   * Form submission — prevents default, trims whitespace, calls the
   * parent's addTodo, and resets the input. The guard clause prevents
   * adding empty todos.
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
    >
      {/* @gitian:security No input sanitization — user text is rendered directly
        * via React's JSX escaping. Safe for XSS, but no length limits or
        * content filtering are applied before storage. */}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        style={{ flex: 1, padding: "0.5rem" }}
      />
      {/* TODO: disable button when input is empty */}
      <button type="submit">Add</button>
    </form>
  );
}
