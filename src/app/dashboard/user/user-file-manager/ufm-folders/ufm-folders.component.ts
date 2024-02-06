import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FolderService } from '../../../../Services/folder.service';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { Folder } from '../../../Classes/folder';
import { FolderItem } from '../../../Classes/folder-item';

import * as $ from 'jquery';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../../Services/user.service';
import { isPlatformBrowser } from '@angular/common';
import { User } from '../../../Classes/user';
import { UserInformation } from '../../../Classes/user-information';
import { error } from 'console';


enum MessageType {
  ERROR =  "border border-red-200",
  SUCCESS = "border border-green-200",
  DEFAULT = "border border-gray-200"
}

@Component({
  selector: 'app-ufm-folders',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './ufm-folders.component.html',
  styleUrl: './ufm-folders.component.scss'
})
export class UfmFoldersComponent implements OnInit {

  public routeTitle: string = '';
  public system_message: string = ''; 
  public notificationIsHidden: boolean = false;
  public folder_name: string = '';


  public user: User = new User();
  public user_information: UserInformation = new UserInformation();

  public FolderItem: Folder = new Folder();
  public Items: Array<any> = new Array<any>();

  public NewFolderItems: Array<FileList | any> = new Array<FileList | any>();

  public UploadFilesGroup: FormGroup = new FormGroup({
    'folder_id': new FormControl(this.FolderItem.id),
    "files": new FormControl()
  })

  public createNewFolderGroup: FormGroup = new FormGroup({
    "user_id": new FormControl(),
    "folder_id": new FormControl(),
    "folder_name": new FormControl(),
  });

  constructor(
    private _FolderService: FolderService,
    private router: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private _UserService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object,

  ) {}


  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        this.routeTitle = params["title"] as string;
      }
    ); 
    if(isPlatformBrowser(this.platformId)){
      let _user: any = localStorage.getItem('user');
      if(this._UserService.checkIfUserloggedIn()){
        let userData: User = JSON.parse(_user)[0] as User;
        this.getUser(userData.id);
        this.getUserInformation(userData.id);


      }
    }


    this.getFolderItem();
    this.getFolderItems();
  }

  getUser = (userID: number) => {
   this._UserService.getUserById(userID).subscribe(
      (response :  any) => {
        this.user = response; 
      }
   );
  }

  getUserInformation = (userID: number) => {
    this._UserService.getUserInformationById(userID).subscribe(
      (response:  any) => {
        this.user_information = response; 
      }
    )

  }


  getFolderItems = () => {
    this._FolderService.getFolderItems(this.FolderItem.id).subscribe(
      response => {
        this.Items = response;
        this.cdr.detectChanges();

      }
    )

  }


  getFolderItem = () => {
    this._FolderService.getFolderByTitle(this.routeTitle).subscribe(
      response => {
        this.FolderItem = response;
      }
    )

  }

  showDropDownMenu = (itemID:number) => {
    jQuery(`.folder_dropdown_menu_${itemID}`).fadeToggle();
  }


  removeFolderItem = (itemID: number) => {
    this._FolderService.deleteFolderItem(itemID).subscribe(
      (response: any) => {
        this.FolderItem.message_type = MessageType.SUCCESS;
        this.FolderItem.system_message = response.message as string; 
      },
      (error: any) => {
        this.FolderItem.message_type = MessageType.ERROR;
        this.FolderItem.system_message = error.message;
      }
    )
  }

  downloadSelectedItem = (itemID: number) => {
    alert(itemID)
  }

  getItemFiles = (event: any) => {
    this.NewFolderItems = event.files;
    console.log(this.NewFolderItems);
  }


  showFileName = (name: any | string): string => {
    if(name == '' || name == undefined || name == null)
      return '';

    let current_name = name.split('.');

    return  current_name[0];
  }

  setFileType = (type: any | string): string => {
    switch(type){
      case 'image/png':
        return 'assets/images/file_formats/png.png'
      break;
      case 'application/pdf':
        return 'assets/images/file_formats/pdf.png'
      break;
      case 'text/csv':
        return 'assets/images/file_formats/csv.png'
      break;
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return 'assets/images/file_formats/xls.png'        
        break;
      case 'video/x-matroska':
        return 'assets/images/file_formats/mkv.png';
        break;
      case 'application/vnd.android.package-archive':
        return 'assets/images/file_formats/apk.png';
        break;
      default:
        return 'assets/images/file_formats/folder.png';
      break;
    }

    return  '';
  }

  deleteSelectedItem = (item: File | any) => {
    let data: Array<File | any> =  new Array<File | any>();
    for(let index  = 0; index <= this.NewFolderItems.length; index++){
      if(this.NewFolderItems[index]?.name !== item?.name){
        data.push(this.NewFolderItems[index]);
      }
    }

    this.NewFolderItems = data.filter((item: File) => {
        return item !== undefined; 
    });

  }

  saveData = () => {
    this.UploadFilesGroup.patchValue({
      "folder_id": this.FolderItem.id,
      "files": this.NewFolderItems
    });

    this._FolderService.uploadNewFolderItems(this.UploadFilesGroup.value).subscribe(
      (response: any) => {

      },
      (error: any) => {

      }
    )
  }

  closeModal = () => {
    jQuery('#upload_files_modal').fadeOut();
  }

  openUploadFilesModal = () => {
    jQuery('#upload_files_modal').fadeIn();
  }

  saveNewFolder = () => {
    this.createNewFolderGroup.patchValue({
      "user_id": this.user.id,
      "folder_id": this.FolderItem.id,
      "folder_name": this.folder_name
    });

    this._FolderService.createSubFolder(this.createNewFolderGroup.value).subscribe(
      (response: any) => {

      },
      (error: any) => {

      }
    )

    

  }

}
