import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { User } from '../dashboard/Classes/user';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(
    private _UserService: UserService,
    public _router: Router
   ){}

  ngOnInit(): void {
    if(this._UserService.checkIfUserloggedIn() == true){
      this._router.navigateByUrl('/dashboard');
    }
  }


  login = () => {
    let user = new User();
    user.username = this.username;
    user.password = this.password;

    this._UserService.login(user).subscribe(
      response => {
        localStorage.setItem("user", JSON.stringify(response));
      }
    );
  }



}
