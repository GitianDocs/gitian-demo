/* @gitian:note
 * --id=bqmrj1
 * --group=global
 * Todo data model — each todo has a unique ID, text content,
 * a completed flag, and a creation timestamp for sorting.
 */
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  // @gitian:todo Add a `priority` field (low, medium, high) for sorting
}
