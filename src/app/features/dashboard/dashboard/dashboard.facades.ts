import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { DashboardState } from './dashboard.reducer';
import * as dashboardSelectors from './dashboard.selectors';

@Injectable({
  providedIn: 'root',
})
export class DashboardFacades {
  loading$: Observable<boolean>;

  constructor(private store$: Store<DashboardState>) {
    this.loading$ = this.store$.pipe(select(dashboardSelectors.getLoading));
  }
}
