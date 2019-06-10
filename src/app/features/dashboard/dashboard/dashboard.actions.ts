import { createAction, props } from '@ngrx/store';

export enum DashboardActionTypes {
  UploadFile = '[Dashboard] UploadFile',
}

export const uploadFile = createAction(
  DashboardActionTypes.UploadFile,
  props<{ file: File }>()
);
