import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { PaginationPipe } from '../../../Pipes/pagination.pipe';
import e from 'express';

@Component({
  selector: 'sql-table',
  standalone: true,
  imports: [
    PaginationPipe
  ],
  templateUrl: './sql-table.component.html',
  styleUrl: './sql-table.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SqlTableComponent  implements OnInit {

  @Input() data: Array<any> = [];
  @Input() dataKeys: Array<any> = [];
  currentPage = 1; // Set the initial page
  public selectedID: number = 0;
  public selectedRows: boolean[] = [];
  public _ArticleID ?: number | string;



  ngOnInit(): void {

  }

  // Function for selecting, an item from MySQL table, and able to edit data based on table name.  
  selectRow = (ITEM: any) => {
    this.selectedID = ITEM.CODE;
    this.selectedRows[ITEM.id] = !this.selectedRows[ITEM.id];
    this._ArticleID = ITEM.code;
 }


}
