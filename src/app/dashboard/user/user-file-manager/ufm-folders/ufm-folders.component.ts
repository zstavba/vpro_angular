import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FolderService } from '../../../../Services/folder.service';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Folder } from '../../../Classes/folder';
import { FolderItem } from '../../../Classes/folder-item';

import * as $ from 'jquery';

@Component({
  selector: 'app-ufm-folders',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './ufm-folders.component.html',
  styleUrl: './ufm-folders.component.scss'
})
export class UfmFoldersComponent implements OnInit {

  public routeTitle: string = '';

  public FolderItem: Folder = new Folder();
  public Items: Array<FolderItem> = new Array<FolderItem>();

  constructor(
    private _FolderService: FolderService,
    private router: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}


  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        this.routeTitle = params["title"] as string;
      }
    );
    this.getFolderItem();
    this.getFolderItems();
  }

  getFolderItems = () => {
    this._FolderService.getFolderItems(this.FolderItem.id).subscribe(
      response => {
        this.Items = response;
        //console.log(response);
        this.cdr.detectChanges();

      }
    )

  }


  getFolderItem = () => {
    this._FolderService.getFolderByTitle(this.routeTitle).subscribe(
      response => {
        console.log(response)
        this.FolderItem = response;
      }
    )

  }

  showDropDownMenu = (itemID:number) => {
    jQuery(`.folder_dropdown_menu_${itemID}`).fadeToggle();
  }


  removeFolderItem = (itemID: number) => {
    alert(itemID)
  }

  downloadSelectedItem = (itemID: number) => {
    alert(itemID)
  }

}
