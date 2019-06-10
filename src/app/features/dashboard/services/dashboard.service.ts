import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { FileType, Types } from '../../shared/models/type';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  getFileTypes(): Observable<FileType[]> {
    return of([
      {
        name: Types.Lanes,
        id: 0,
        fields: ['First name', 'Last name', 'Date of Birth'],
      },
      {
        name: Types.Jobs,
        id: 0,
        fields: ['Email', 'Phone number', 'Age'],
      },
    ] as FileType[]);
  }
}
