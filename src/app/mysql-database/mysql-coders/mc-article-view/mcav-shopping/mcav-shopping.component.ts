import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../../../Services/warehouse.service';
import { UserService } from '../../../../Services/user.service';
import { AddCompanyComponent } from '../../../../dashboard/components/add-company/add-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mcav-shopping',
  standalone: true,
  imports: [
    AddCompanyComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './mcav-shopping.component.html',
  styleUrl: './mcav-shopping.component.scss'
})
export class McavShoppingComponent implements OnInit {
  showDatePickerModal: boolean = false;
  
  constructor(
    private _WarehouseService: WarehouseService,
    private _UserService: UserService
  ){}

  ngOnInit(): void {
    
  }


  toggleModal() {
    this.showDatePickerModal = !this.showDatePickerModal;
  }

}
