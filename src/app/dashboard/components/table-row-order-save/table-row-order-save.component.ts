import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-row-order-save',
  standalone: true,
  imports: [],
  templateUrl: './table-row-order-save.component.html',
  styleUrl: './table-row-order-save.component.scss'
})
export class TableRowOrderSaveComponent  implements OnInit {
  
  @Input() itemData = {
    workorder_id: '',
    workorder_title: '',
    workorder_status: '',
    workorder_date: ''
  }
  
  ngOnInit(): void {
    
  }
}
