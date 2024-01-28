import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Currencies } from '../../Classes/currencies';
import { SearchPipe } from '../../../Pipes/search.pipe';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  @Input() dataList: Array<any> = new Array<any>();
  @Output() selectedValue: EventEmitter<any> = new EventEmitter<any>(); // Correct usage of EventEmitter
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();

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
    this.selectedValue.emit(item);
  }

  isItemChosen(item: any): boolean {
    return this.chosenItem !== null && this.chosenItem === item && this.chosenItemActive;  
  }

  setItemName(data: any): string {
    switch(this.valueType){
      case 'Valuta':
          this.getItemName();
          return data.name;
        break;
      case 'Uporabniki':
      case 'Operater':
        this.getItemName();
        return `${data.firstName} ${(data.lastName == null || data.lastName == undefined) ? '': data.lastName}`
        break;
    }

    return '';
  }

  getItemName = (): string => {
    switch(this.valueType){
      case 'Valuta':
          return this.chosenItem?.name;
        break;
      case 'Uporabniki':
      case 'Operater':
        return `${this.chosenItem?.firstName} ${(this.chosenItem?.lastName == null || this.chosenItem?.lastName == undefined)? '': this.chosenItem?.lastName}`
        break;
    }
    return  '';
  }

  toggleMenuVisibility(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  onDropdownSelection = (data: any) => {
    this.selectedValue.emit(data);
  }

  onItemClicked = (data: any) => {
      switch(this.valueType){
        case 'Valuta':
          break;
        case 'Operater':
          this.itemClicked.emit({
            'article_operator': data
          }); 
          break;
        case 'Uporabniki':
            this.itemClicked.emit({
              'article_users': data
            }); 
          break;
      }
  }

}
