import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] add todo',
  props<{ todo: string }>()
);
export const deleteTodo = createAction(
  '[Todo] delete todo',
  props<{ todoId: number }>()
);
export const updateTodo = createAction(
  '[Todo] update todo',
  props<{ todoId: number; todo: string }>()
);

export const loadTodoList = createAction(
  '[Todo] load todo list',
  props<{ todoList: string[] }>()
);

export const setEditIndex = createAction(
  '[Todo] set index of todo to be edit',
  props<{ todoId: number }>()
);
