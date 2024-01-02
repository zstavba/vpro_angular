import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from '@angular/core';
import { PaginationPipe } from '../../../Pipes/pagination.pipe';

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


  ngOnInit(): void {
    
  }



}
