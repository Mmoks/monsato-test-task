import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from '../services/dashboard.service';
import { DashboardState } from './dashboard.reducer';
import { loadFileTypes, fileTypesLoaded } from './dashboard.actions';
import { FileType } from '../../shared/models/type';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class DashboardEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFileTypes),
      exhaustMap(_ =>
        this.dashboardService
          .getFileTypes()
          .pipe(map(types => fileTypesLoaded({ types })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
    private store$: Store<DashboardState>
  ) {}
}
