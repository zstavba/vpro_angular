import { Component, OnInit } from '@angular/core';
import { UserAvatarComponent } from '../../components/user-avatar/user-avatar.component';
import { RouterLink } from '@angular/router';
import { WarehouseService } from '../../../Services/warehouse.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    RouterLink,
    UserAvatarComponent
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss'
})
export class UserHomeComponent implements OnInit{

  constructor (private _Warehoue: WarehouseService) {}
  ngOnInit(): void {
      this.getList();
  } 


  getList = () => {
      this._Warehoue.get().subscribe(
        response => {
          console.log(response);
        }
      )
  }



}
