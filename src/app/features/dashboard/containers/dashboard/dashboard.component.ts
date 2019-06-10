import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardFacades } from '../../dashboard/dashboard.facades';
import * as Angular5Csv from 'angular5-csv/dist/Angular5-csv';
import { FileType } from 'src/app/features/shared/models/type';

@Component({
  selector: 'app-users',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  loading$: Observable<boolean> = this.dashboardFacades.loading$;
  types$: Observable<FileType[]> = this.dashboardFacades.types$;
  selectedType$: Observable<FileType> = this.dashboardFacades.selectedType$;
  selectedFile$: Observable<File> = this.dashboardFacades.selectedFile$;
  sourceFields$: Observable<string[]> = this.dashboardFacades.sourceFields$;
  templateFields$: Observable<string[]> = this.dashboardFacades.templateFields$;

  options: Partial<Angular5Csv.Options> = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false,
    useBom: true,
    noDownload: false,
    headers: [],
    nullToEmptyString: true,
  };
  csvContent: string;
  @ViewChild('csvLoader', { static: false }) csvLoader: ElementRef<
    HTMLInputElement
  >;

  constructor(private dashboardFacades: DashboardFacades) {
    this.selectedType$.subscribe(types => console.log(types));
  }

  ngOnInit(): void {
    this.dashboardFacades.loadTypes();
  }

  trackControl(item: any) {
    return item.id;
  }

  createCsv(fields: string[]) {
    return new Angular5Csv.Angular5Csv([], 'My Report', {
      ...this.options,
      headers: fields,
    });
  }

  selectFileType(fileType: FileType) {
    this.dashboardFacades.selectFileType(fileType);
  }

  uploadCsv() {
    const files = this.csvLoader.nativeElement.files;
    if (files && files.length) {
      const fileToRead = files[0];
      this.dashboardFacades.selectFile(fileToRead);
      const fileReader = new FileReader();
      fileReader.onload = this.onFileLoad.bind(this);

      fileReader.readAsText(fileToRead, 'UTF-8');
    }
  }

  onFileLoad(fileLoadedEvent) {
    const textFromFileLoaded = fileLoadedEvent.target.result;
    const csvFields: string[] = (textFromFileLoaded as string)
      .split('\n')[0]
      .split(',');
    this.dashboardFacades.setSourceFields(csvFields);
  }

  cancel() {
    this.csvLoader.nativeElement.value = null;
    this.dashboardFacades.reset();
  }
}
