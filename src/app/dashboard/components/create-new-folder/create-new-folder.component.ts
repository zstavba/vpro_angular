import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { User } from '../../Classes/user';
import { isPlatformBrowser } from '@angular/common';
import { response } from 'express';
import { FolderService } from '../../../Services/folder.service';
import { UserInformation } from '../../Classes/user-information';
import { Folder } from '../../Classes/folder';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

 export enum FolderType {
  MERITVE = 'meritve',
  TEHNOLOGIJA = 'tehnologija',
  KONTROLNI_PLAN = 'kontrolni plan',
  NAPAKE = 'vdrževalci napake',
  DEFAULT = 'null',
}


@Component({
  selector: 'create-new-folder',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-new-folder.component.html',
  styleUrl: './create-new-folder.component.scss'
})
export class CreateNewFolderComponent implements OnInit  {

  public user: User = new User();
  public user_info: UserInformation = new UserInformation();

  public isError: boolean = false;
  public errorMessage: string = '';

  public FolderFiles: Array<any> = new Array<any>();
  public folder_type_name: string = '';
  public folder_name: string = '';

  FolderGroup = new FormGroup({
    title: new FormControl(),
    fk_user_id: new FormControl(),
    folder_items: new FormControl(),
    type: new FormControl() 
  })

  constructor(
    private _UserService: UserService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private _FolderService: FolderService,
    private cdr: ChangeDetectorRef,
  ) {}


  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      let _user: any = localStorage.getItem('user');
      if(this.checkIfLoggedIn()){
        let userData = JSON.parse(_user)[0] as User;
        this.getUserData(userData.id);
        this.getUserInfo(userData.id);
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

  getUserInfo = (userID: number) => {
    this._UserService.getUserInformationById(userID).subscribe(
      response => {
        this.user_info = response;
      }
    );
  }

  getFolderItems = (files: any) => {
    let list_files = files.files;
    //console.log(list_files);
    this.FolderFiles = list_files;
  }

  showFileName = (name: string): string => {
    if(name == '' || name == undefined || name == null)
      return '';

    let current_name = name.split('.');

    return  current_name[0];
  }

  setFileType = (type: string): string => {
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
      default:
        return '';
      break;
    }

    return  '';
  }


  getFolderType =  (): typeof FolderType => {
    return FolderType;
  } 

  getFolderTypeName = (event: any | Event) => {
    this.folder_type_name = event.target.value;
  }

  deleteFolderItem = (file: any) => {
    let data: Array<any> = new Array<any>();
    for(let index = 0; index <= this.FolderFiles.length; index++){
      if(this.FolderFiles[index]?.name !== file?.name){
          data.push(this.FolderFiles[index])
      }
    }
    this.FolderFiles = data.filter((item) => {
      return item !== undefined;
    });

    //console.log(this.FolderFiles);
    
  }
  createNewFolder = () => {
   
    this.FolderGroup.patchValue({
      "fk_user_id": this.user.id,
      "folder_items": this.FolderFiles
    });

    this._FolderService.createFolder(this.FolderGroup.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
        this.isError = true;
        this.errorMessage = error.error.message;
        this.cdr.detectChanges();
      }
    );
    
  }
}
