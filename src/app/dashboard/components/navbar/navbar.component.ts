import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { User } from '../../Classes/user';
import { isPlatformBrowser } from '@angular/common';
import { UserInboxComponent } from '../../user/user-inbox/user-inbox.component';
import { UserInformation } from '../../Classes/user-information';

declare var jQuery: any; 

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  public user: User = new User();
  public user_info: UserInformation = new  UserInformation();

  constructor (
    private _UserService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object
  )  {}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      let localUser = localStorage.getItem('user');
      if(localUser != undefined || localUser != null){
        let data = JSON.parse(localUser)[0] as User;
        this.getData(data.id);
        this.getUserInfo(data.id);
      }
    }
  }

  openUserMenu = () => {  
   jQuery('#DropdownUserMenu').fadeToggle()
  }

  getData = (userId: number) => {
    this._UserService.getUserById(userId).subscribe(
      response => {
        //console.log(response);
        this.user = response;
      }
    )


  }

  getUserInfo = (userId: number) => {
    this._UserService.getUserInformationById(userId).subscribe(
      response => {
        this.user_info = response;
      }
    )
  } 


}
