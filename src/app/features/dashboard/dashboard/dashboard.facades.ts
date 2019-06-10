import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { DashboardState } from './dashboard.reducer';
import * as dashboardSelectors from './dashboard.selectors';
import {
  loadFileTypes,
  selectFileType,
  selectFile,
  setSourceFields,
  reset,
} from './dashboard.actions';
import { FileType } from '../../shared/models/type';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacades {
  loading$: Observable<boolean> = this.store$.pipe(
    select(dashboardSelectors.getLoading)
  );
  types$: Observable<FileType[]> = this.store$.pipe(
    select(dashboardSelectors.getTypes)
  );
  selectedType$: Observable<FileType> = this.store$.pipe(
    select(dashboardSelectors.getSelectedType)
  );
  selectedFile$: Observable<File> = this.store$.pipe(
    select(dashboardSelectors.getSelectedFile)
  );
  sourceFields$: Observable<string[]> = this.store$.pipe(
    select(dashboardSelectors.getSourceFields)
  );
  templateFields$: Observable<string[]> = this.store$.pipe(
    select(dashboardSelectors.getTemplateFields)
  );

  constructor(private store$: Store<DashboardState>) {}

  loadTypes() {
    this.store$.dispatch(loadFileTypes());
  }

  selectFileType(fileType: FileType) {
    this.store$.dispatch(selectFileType({ fileType }));
  }

  selectFile(file: File) {
    this.store$.dispatch(selectFile({ file }));
  }

  setSourceFields(fields: string[]) {
    this.store$.dispatch(setSourceFields({ fields }));
  }

  reset() {
    this.store$.dispatch(reset());
  }
}
