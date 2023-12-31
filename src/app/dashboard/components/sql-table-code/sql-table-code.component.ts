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
  @Input() item_length ?: string; 

  ngOnInit(): void {
    
  }

}
