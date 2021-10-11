import { createSelector, createFeatureSelector } from '@ngrx/store';

export const featureKey = 'todo';

export interface TodoState {
  todoList: string[];
  editIndex: number;
}

export const selectTodo = createFeatureSelector<TodoState>(featureKey);
export const selectTodoList = createSelector(
  selectTodo,
  (state) => state.todoList
);
export const selectEditIndex = (state: TodoState) => state.editIndex;
