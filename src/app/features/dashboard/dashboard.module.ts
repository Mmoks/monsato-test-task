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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatIconModule } from '@angular/material/icon';

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
    MatGridListModule,
    MatSelectModule,
    MatDividerModule,
    MaterialFileInputModule,
    MatIconModule,
  ],
  exports: [],
  providers: [reducerProvider],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
