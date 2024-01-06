import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { PaginationPipe } from '../../../Pipes/pagination.pipe';
import e from 'express';
import { SystemPaginationComponent } from '../system-pagination/system-pagination.component';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { User } from '../../Classes/user';

@Component({
  selector: 'sql-table',
  standalone: true,
  imports: [
    NgxPaginationModule,
    SystemPaginationComponent
  ],
  templateUrl: './sql-table.component.html',
  styleUrl: './sql-table.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SqlTableComponent  implements OnInit {

  @Input() data: Array<any> = [];
  @Input() dataKeys: Array<any> = [];
  p: number = 1;
  currentPage = 1; // Set the initial page
  public selectedID: number = 0;
  public selectedRows: boolean[] = [];
  public _ArticleID ?: number | string;



  ngOnInit(): void {
    //console.log(this.data)

  }

  // Function for selecting, an item from MySQL table, and able to edit data based on table name.  
  selectRow = (ITEM: any) => {
    this.selectedID = ITEM.CODE;
    this.selectedRows[ITEM.id] = !this.selectedRows[ITEM.id];
    this._ArticleID = ITEM.code;
 }



}
