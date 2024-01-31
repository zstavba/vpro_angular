import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private http_link: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getFolder = (folder_name: string) => {

  }

  getFolders = () => {

  }

  createFolder = () => {

  }

  updateFolder = () => {

  }

  deleteFolder = () => {
    
  }


}
