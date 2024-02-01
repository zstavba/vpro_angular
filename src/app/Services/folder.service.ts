import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Folder } from '../dashboard/Classes/folder';
import { Observable } from 'rxjs';
import { FolderItem } from '../dashboard/Classes/folder-item';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private http_link: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getFolderItems = (folderID: number): Observable<FolderItem[]> => {
    return this.http.get<FolderItem[]>(`${this.http_link}/filemanager/get/folders/items/${folderID}`);
  }

  getFolders = (): Observable<Folder[]> => {
    return this.http.get<Folder[]>(`${this.http_link}/filemanager/get/folders`);
  }

  createFolder = (folder: any) : Observable<any> => {
      console.log(folder);
      const DATA: FormData = new FormData();
      DATA.append('title',folder.title);
      DATA.append('type',folder.type);
      DATA.append('fk_user_id',folder.fk_user_id);
      Array.from(folder.folder_items).forEach((element : any) => {
        DATA.append('folder_items',element, element.name)
      });
      const headers = new HttpHeaders(); // You might need to set appropriate headers here

      // Log the entire request before sending
      const request = {
        url: `${this.http_link}/filemanager/create/new/folder`,
        data: DATA,
      };
      

      return this.http.post<any>(request.url,request.data);
  }

  getFolderByTitle = (folder_title: string): Observable<Folder> => {
    return this.http.get<Folder>(`${this.http_link}/filemanager/get/folder/object/${folder_title}`)
  }

  updateFolder = () => {

  }

  deleteFolder = () => {

  }


}
