import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    UserSidebarComponent,
    UserAvatarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit  {

  constructor(
    private _route: Router,
    private _UserService: UserService  
  ) {}

  ngOnInit(): void {
     if(this._UserService.checkIfUserloggedIn() === false){
        this._route.navigateByUrl('/')
     }
  }

}
