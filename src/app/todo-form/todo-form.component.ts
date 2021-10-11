import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Output() addTodo = new EventEmitter();
  @Output() cancelUpdate = new EventEmitter();
  @Output() updateTodo = new EventEmitter();
  @Input() todoInput: any;
  @Input() edit: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  addTodoEmitter() {
    this.addTodo.emit(this.todoInput);
    this.todoInput = '';
  }

  cancelUpdateEmitter() {
    this.cancelUpdate.emit();
  }
  updateTodoEmitter() {
    this.updateTodo.emit(this.todoInput);
    this.todoInput = '';
  }
}
