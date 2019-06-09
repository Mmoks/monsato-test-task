import {
  DashboardState,
  dashboardReducer,
} from '../dashboard/dashboard.reducer';
import { InjectionToken } from '@angular/core';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface State {
  dashboard: DashboardState;
}

export const reducerToken = new InjectionToken<ActionReducerMap<State>>(
  'UsersReducers'
);

export const reducers: ActionReducerMap<State> = {
  dashboard: dashboardReducer,
};

export const getFeatureState = createFeatureSelector<State>('users');

export function getReducers() {
  return reducers;
}

export const reducerProvider = [
  { provide: reducerToken, useFactory: getReducers },
];
