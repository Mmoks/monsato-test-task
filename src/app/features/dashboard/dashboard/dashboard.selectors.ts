import { getFeatureState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const getDashboardState = createSelector(
  getFeatureState,
  state => state.dashboard
);

export const getLoading = createSelector(
  getDashboardState,
  state => state.loading
);

export const getTypes = createSelector(
  getDashboardState,
  state => state.types
);

export const getSelectedType = createSelector(
  getDashboardState,
  state => state.selectedFileType
);

export const getSelectedFile = createSelector(
  getDashboardState,
  state => state.selectedFile
);

export const getSourceFields = createSelector(
  getDashboardState,
  state => state.sourceFields
);

export const getTemplateFields = createSelector(
  getDashboardState,
  state => (state.selectedFileType ? state.selectedFileType.fields : [])
);
