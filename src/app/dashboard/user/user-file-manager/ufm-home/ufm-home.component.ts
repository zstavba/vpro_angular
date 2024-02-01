import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FolderService } from '../../../../Services/folder.service';
import { Folder } from '../../../Classes/folder';

@Component({
  selector: 'app-ufm-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './ufm-home.component.html',
  styleUrl: './ufm-home.component.scss'
})
export class UfmHomeComponent  implements OnInit {

  public FoldersList: Array<Folder> = new Array<Folder>();

  constructor(
    private _FolderService: FolderService
  ) {}

  ngOnInit(): void {
    this.getFolders();
  }

  getFolders = () => {
    this._FolderService.getFolders().subscribe(
      response => { 
        this.FoldersList = response;
      }
    )
  }

}
