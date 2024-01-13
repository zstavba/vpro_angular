import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupType } from '../dashboard/Classes/group-type';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private http_link: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get = (): Observable<GroupType[]> => {
    return this.http.get<GroupType[]>(`${this.http_link}/group/list`)
  }

  getByType = (group_type: string): Observable<GroupType[]> => {
    return this.http.get<GroupType[]>(`${this.http_link}/group/list/${group_type}`);
  }

}
