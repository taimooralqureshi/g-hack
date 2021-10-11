import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import * as TodoActions from './todo.actions';
import { map } from 'rxjs/operators';
import { TodoService } from '../service/todo.service';
@Injectable()
export class TodoEffects {
  loadTodoFromStorage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => {
        const todoList = this.todoService.loadTodoList();
        console.log(todoList);
        return TodoActions.loadTodoList({ todoList });
      })
    );
  });
  addTodoToList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.addTodo),
      map((action) => {
        this.todoService.addTodo(action.todo);
        return { type: 'Noop' };
      })
    )
  );
  deleteTodoFromList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      map((action) => {
        this.todoService.deleteTodo(action.todoId);
        return { type: 'Noop' };
      })
    )
  );

  updateTodoToList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.updateTodo),
      map((action) => {
        this.todoService.updateTodo(action.todo);
        return { type: 'Noop' };
      })
    )
  );

  setTodoEditModeInList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.setEditIndex),
      map((action) => {
        this.todoService.setEditIndex(action.todoId);
        return { type: 'Noop' };
      })
    )
  );
  constructor(private actions$: Actions, private todoService: TodoService) {}
}
