import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sql-table-code',
  standalone: true,
  imports: [],
  templateUrl: './sql-table-code.component.html',
  styleUrl: './sql-table-code.component.scss'
})
export class SqlTableCodeComponent implements OnInit {

  @Input() item_name ?: string;
  @Input() item_length ?: string | number; 
  @Input() where_statment ?: boolean = false;
  @Input() where_statment_query ?: string;  
  @Input() response_time: any; 

  ngOnInit(): void {
    
  }

}
