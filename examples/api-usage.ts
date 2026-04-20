import type { Todo } from "../src/types";

/* @docs
 * API usage example — demonstrates how to work with the Todo
 * interface programmatically, outside of React components.
 * This is useful for scripts, tests, or server-side code.
 */

// @gitian:perf Factory function for creating todos with sensible defaults
// --id=6ihbf6
// --urgency=normal
function createTodo(text: string): Todo {
  return {
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: Date.now(),
  };
}

// @gitian:note Batch operations — create multiple todos at once
// --group=api
function createBatch(texts: string[]): Todo[] {
  return texts.map(createTodo);
}

/* @gitian:note Filtering utilities — common queries over a todo collection.
 * --group=api
 * These pure functions make it easy to compose todo operations.
 */
function getCompleted(todos: Todo[]): Todo[] {
  return todos.filter((t) => t.completed);
}

function getPending(todos: Todo[]): Todo[] {
  return todos.filter((t) => !t.completed);
}

function getStats(todos: Todo[]) {
  return {
    total: todos.length,
    completed: getCompleted(todos).length,
    pending: getPending(todos).length,
    completionRate:
      todos.length > 0 ? getCompleted(todos).length / todos.length : 0,
  };
}

// Usage
const todos = createBatch([
  "Read the Gitian docs",
  "Set up vault structure",
  "Add @gitian annotations",
  "Push to GitHub",
]);

todos[0].completed = true;
todos[1].completed = true;

console.log("Stats:", getStats(todos));
console.log(
  "Pending:",
  getPending(todos).map((t) => t.text),
);
