import { Component, OnInit } from '@angular/core';
import { CreateNewFolderComponent } from '../../components/create-new-folder/create-new-folder.component';
import { UserService } from '../../../Services/user.service';
import { FolderService } from '../../../Services/folder.service';
import { Folder } from '../../Classes/folder';
import { FolderItem } from '../../Classes/folder-item';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-file-manager',
  standalone: true,
  imports: [
    CreateNewFolderComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './user-file-manager.component.html',
  styleUrl: './user-file-manager.component.scss'
})
export class UserFileManagerComponent  implements OnInit {

  public FoldersList: Array<Folder> = new Array<Folder>();

  constructor(
    private _UserService: UserService,
    public _FolderService: FolderService
  ) {}

  ngOnInit(): void {
      this.getFolderItems();
  }

  getFolderItems = () => {
    this._FolderService.getFolders().subscribe(
      response => {
        this.FoldersList = response;
      },
      error => {

      }
    )
  }

}
