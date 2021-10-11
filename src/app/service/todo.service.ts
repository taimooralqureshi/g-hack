import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: string[];
  editIndex: number = -1;
  constructor() {
    this.todoList = [];
  }
  addTodo(todo: string) {
    this.todoList = [...this.todoList, todo];
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  deleteTodo(index: number) {
    this.todoList = [...this.todoList.filter((todo, i) => index !== i)];
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
  }

  setEditIndex(index: number) {
    this.editIndex = index;
  }

  updateTodo(todo: string) {
    this.todoList = [
      ...this.todoList.map((t, i) => (i === this.editIndex ? todo : t)),
    ];
    localStorage.setItem('todo-list', JSON.stringify(this.todoList));
    this.editIndex = -1;
  }

  loadTodoList() {
    this.todoList = JSON.parse(localStorage.getItem('todo-list') ?? '');
    if (!this.todoList) {
      localStorage.setItem('todo-list', '');
      return [];
    } else {
      return this.todoList;
    }
  }
}
