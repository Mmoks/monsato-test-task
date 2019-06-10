import * as dashboardActions from './dashboard.actions';
import { on, createReducer } from '@ngrx/store';
import { FileType } from '../../shared/models/type';

export interface DashboardState {
  loading: boolean;
  types: FileType[];
  selectedFileType: FileType;
  selectedFile: File;
  sourceFields: string[];
}

const initialState: DashboardState = {
  loading: false,
  types: [],
  selectedFileType: null,
  selectedFile: null,
  sourceFields: [],
};

export const dashboardReducer = createReducer(
  initialState,
  on(dashboardActions.fileTypesLoaded, (state, action) => ({
    ...state,
    types: action.types,
  })),
  on(dashboardActions.selectFileType, (state, { fileType }) => ({
    ...state,
    selectedFileType: fileType,
  })),
  on(dashboardActions.selectFile, (state, { file }) => ({
    ...state,
    selectedFile: file,
  })),
  on(dashboardActions.setSourceFields, (state, { fields }) => ({
    ...state,
    sourceFields: fields,
  })),
  on(dashboardActions.reset, _ => initialState)
);
