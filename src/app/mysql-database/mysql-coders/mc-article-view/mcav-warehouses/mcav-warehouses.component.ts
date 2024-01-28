import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-mcav-warehouses',
  standalone: true,
  imports: [
    AgGridAngular
  ],
  templateUrl: './mcav-warehouses.component.html',
  styleUrl: './mcav-warehouses.component.scss'
})
export class McavWarehousesComponent implements OnInit {

  ngOnInit(): void {
    
  }


}
