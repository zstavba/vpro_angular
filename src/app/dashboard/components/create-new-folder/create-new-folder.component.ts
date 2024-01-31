import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../Classes/user';
import { isPlatformBrowser } from '@angular/common';
import { response } from 'express';
import { FolderService } from '../../../Services/folder.service';

@Component({
  selector: 'create-new-folder',
  standalone: true,
  imports: [],
  templateUrl: './create-new-folder.component.html',
  styleUrl: './create-new-folder.component.scss'
})
export class CreateNewFolderComponent implements OnInit  {

  public user: User = new User();

  constructor(
    private _UserService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _FolderService: FolderService
  ) {}


  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      let _user: any = localStorage.getItem('user');
      if(this.checkIfLoggedIn()){
        let userData = JSON.parse(_user)[0] as User;
        this.getUserData(userData.id);
      }
    }
  }

  checkIfLoggedIn = () : boolean => {
    let loggedIn: boolean =  this._UserService.checkIfUserloggedIn();
  
    if(loggedIn)
        return true;
    
    return false;
  }

  getUserData = (userID: number) => {
    this._UserService.getUserById(userID).subscribe(
      response => {
       this.user = response;
      }
    )
  }




}
