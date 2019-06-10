import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/features/shared';
import { DashboardFacades } from '../../dashboard/dashboard.facades';
import { MetaData } from '../../dashboard/dashboard.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private dashboardFacades: DashboardFacades) {
    this.loading$ = this.dashboardFacades.loading$;
  }

  ngOnInit(): void {}
}
