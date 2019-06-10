import { createAction, props } from '@ngrx/store';
import { FileType } from '../../shared/models/type';

export enum DashboardActionTypes {
  LoadFileTypes = '[Dashboard] LoadFileTypes',
  FileTypesLoaded = '[Dashboard] FileTypesLoaded',
  SelectFileType = '[Dashboard] SelectFileType',
  SelectFile = '[Dashboard] SelectFile',
  SetSourceFields = '[Dashboard] SetSourceFields',
  Reset = '[Dashboard] Reset',
}

export const loadFileTypes = createAction(DashboardActionTypes.LoadFileTypes);

export const fileTypesLoaded = createAction(
  DashboardActionTypes.FileTypesLoaded,
  props<{ types: FileType[] }>()
);

export const selectFileType = createAction(
  DashboardActionTypes.SelectFileType,
  props<{ fileType: FileType }>()
);

export const selectFile = createAction(
  DashboardActionTypes.SelectFile,
  props<{ file: File }>()
);

export const setSourceFields = createAction(
  DashboardActionTypes.SetSourceFields,
  props<{ fields: string[] }>()
);

export const reset = createAction(DashboardActionTypes.Reset);
