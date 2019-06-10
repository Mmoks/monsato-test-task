import * as dashboardActions from './dashboard.actions';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { User } from '../../shared/models/user.model';

export interface MetaData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface DashboardState {
  users: EntityState<User>;
  meta: MetaData;
  loading: boolean;
}

export const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

const emptyMeta: MetaData = {
  page: 1,
  per_page: null,
  total: null,
  total_pages: null,
};

const initialState: DashboardState = {
  users: usersAdapter.getInitialState(),
  meta: emptyMeta,
  loading: false,
};

export function dashboardReducer(
  state = initialState,
  action: any
): DashboardState {
  return null;
}
