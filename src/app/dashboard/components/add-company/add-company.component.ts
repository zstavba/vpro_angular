import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { response } from 'express';
import { User } from '../../Classes/user';
import { UserInformation } from '../../Classes/user-information';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../../../Pipes/search.pipe';
import * as $ from 'jquery';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDateRangePicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {NativeDateAdapter} from '@angular/material/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BankService } from '../../../Services/bank.service';
import { Currencies } from '../../Classes/currencies';
import { DropdownSelectComponent } from '../dropdown-select/dropdown-select.component';


@Component({
  selector: 'add-company',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    SearchPipe,
    ReactiveFormsModule,
    DropdownSelectComponent
  ],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.scss'
})
export class AddCompanyComponent  implements OnInit {


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  public UsersList: Array<User> = new Array<User>();
  public ChosenUserObject: User = new User();
  public ChosenUserActive: boolean = false;
  public searchUser: string = '';


  public CurrenciesList: Array<Currencies> = new Array<Currencies>();
  public ChosenCurrencieObject: Currencies = new Currencies();
  public ChosenCurrencieActive: boolean = false;
  public searchCurrencie: string = '';

  constructor(
    private _UserService: UserService,
    private _BankService: BankService,
    private _renderer: Renderer2,
    private overlayContainer: OverlayContainer
  ){
    overlayContainer.getContainerElement().classList.add('modal-overlay');

  }

  ngOnInit(): void {
    //window.dispatchEvent(new Event('resize'));
    this.getUsers();
    this.getCurrencies();
  }


  getUsers = () => {
    this._UserService.get().subscribe(
      response => {
        this.UsersList = response;
      }
    );
  }

  setChosenItem = (object: any, item_name: string, active: boolean) => {
    switch(item_name){
      case 'user':
          this.ChosenUserObject = object;
          this.ChosenUserActive = active; 
        break;
      case 'currencie':
        this.ChosenCurrencieObject = object;
        this.ChosenCurrencieActive = active;
        break;
    }
  }
  toggleDropdownMenu = (item_name: string) => {
    jQuery(`.${item_name}`).fadeToggle()
  }

  getCurrencies = () => {
    this._BankService.getCurrencies().subscribe(
      response => {
        this.CurrenciesList = response;
      }
    )
  }
  



}



