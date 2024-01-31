import { Component, OnInit } from '@angular/core';
import { CreateNewFolderComponent } from '../../components/create-new-folder/create-new-folder.component';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-user-file-manager',
  standalone: true,
  imports: [
    CreateNewFolderComponent
  ],
  templateUrl: './user-file-manager.component.html',
  styleUrl: './user-file-manager.component.scss'
})
export class UserFileManagerComponent  implements OnInit {

  constructor(
    private _UserService: UserService
  ) {}

  ngOnInit(): void {
    
  }

}
