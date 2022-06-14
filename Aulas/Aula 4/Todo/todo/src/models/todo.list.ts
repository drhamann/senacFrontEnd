import { TodoItem } from "./todo.item";

export class TodoList {
  constructor(public user: string, private _todoItems: TodoItem[] = []) {
  }

  get items(): readonly TodoItem[] {
    return this._todoItems;
  }
  addItem(task: string) {
    this._todoItems.push(new TodoItem(task));
  }
}
