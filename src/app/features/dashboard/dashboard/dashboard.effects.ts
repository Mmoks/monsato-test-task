import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { UsersService } from '../services/users.service';
import { DashboardState } from './dashboard.reducer';
@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private usersApiService: UsersService,
    private store$: Store<DashboardState>
  ) {}
}
