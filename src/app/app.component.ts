import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addTodo,
  deleteTodo,
  setEditIndex,
  updateTodo,
} from './store/todo.actions';
import { selectTodoList, TodoState } from './store/todo.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'g-hack';
  todoList: string[];
  editIndex: number = -1;
  constructor(public store: Store<TodoState>) {
    this.todoList = [];
  }

  ngOnInit(): void {
    this.store.select(selectTodoList).subscribe((todos) => {
      this.todoList = JSON.parse(JSON.stringify(todos));
    });
  }
  addTodo(todo: string) {
    // console.log(todo);
    // this.todoList.push(todo);
    this.store.dispatch(addTodo({ todo }));
  }

  deleteTodo(index: number) {
    // this.todoList.splice(index, 1);
    this.store.dispatch(deleteTodo({ todoId: index }));
  }

  editTodo(index: number) {
    this.store.dispatch(setEditIndex({ todoId: index }));
    this.editIndex = index;
  }

  updateTodo(todo: string) {
    // this.todoList.splice(this.editIndex, 1, todo);
    this.store.dispatch(updateTodo({ todoId: this.editIndex, todo }));
    this.editIndex = -1;
  }
}
