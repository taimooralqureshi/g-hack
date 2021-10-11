import { state } from '@angular/animations';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  INITIAL_STATE,
  MetaReducer,
  on,
  State,
} from '@ngrx/store';

import * as todoActions from './todo.actions';
import { TodoState } from './todo.selector';

export const initialState: TodoState = {
  todoList: [],
  editIndex: -1,
};

const todoReducer = createReducer(
  initialState,
  on(todoActions.loadTodoList, (state, { todoList }) => ({
    ...state,
    todoList: [...todoList],
  })),
  on(todoActions.addTodo, (state, action) => ({
    ...state,
    todoList: [...state.todoList, action.todo],
  })),
  on(todoActions.deleteTodo, (state, { todoId }) => ({
    ...state,
    todoList: state.todoList.filter((_, i) => i !== todoId),
  })),
  on(todoActions.updateTodo, (state, action) => ({
    ...state,
    todoList: [
      ...state.todoList.map((todo, i) =>
        i === action.todoId ? action.todo : todo
      ),
    ],
  }))
);

export function reducer(state: TodoState | undefined, action: Action) {
  return todoReducer(state, action);
}
