import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard/dashboard.effects';
import { StoreModule } from '@ngrx/store';
import { reducerToken, reducerProvider } from './reducers';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EffectsModule.forFeature([DashboardEffects]),
    StoreModule.forFeature('users', reducerToken),
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  exports: [],
  providers: [reducerProvider],
  declarations: [DashboardComponent],
})
export class UsersModule {}
