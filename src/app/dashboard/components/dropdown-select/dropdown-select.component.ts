import { Component, Input, OnInit } from '@angular/core';
import { Currencies } from '../../Classes/currencies';
import { SearchPipe } from '../../../Pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dropdown-select',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SearchPipe
  ],
  templateUrl: './dropdown-select.component.html',
  styleUrl: './dropdown-select.component.scss'
})
export class DropdownSelectComponent  implements OnInit {

  @Input() dataList: Array<any> = new Array();
  @Input() valueType: string = '';

  public chosenItem: any;
  public chosenItemActive : boolean = false;
  public searchText: string = '';

  public isMenuVisible : boolean  = false;

  ngOnInit(): void {

  }

  setChosenItem(item: any, active: boolean): void {
    this.chosenItem = item;
    this.chosenItemActive = active;
  }

  isItemChosen(item: any): boolean {
    return this.chosenItem !== null && this.chosenItem === item && this.chosenItemActive;  
  }

  setItemName(data: any): string {
    switch(this.valueType){
      case 'Valuta':
          return data.name;
        break;
      case 'Uporabniki':
        return `${data.firstName} ${data.lastName}`
        break;
    }

    return '';
  }

  toggleMenuVisibility(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }



}
