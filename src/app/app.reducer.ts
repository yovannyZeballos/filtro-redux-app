import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFitro from './filter/filter.reducer';
import * as fromActionsFitro from './filter/filter.actions';

export interface AppState{
    todos: Todo[];
    filtro: fromActionsFitro.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos:  fromTodo.todoReducer,
    filtro: fromFitro.filtroReducer
}