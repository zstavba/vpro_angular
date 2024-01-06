import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classification } from '../dashboard/Classes/classification';

@Injectable({
  providedIn: 'root'
})
export class ClassificationsService {

  public http_link: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get = (): Observable<Classification[]> => {
    return this.http.get<Classification[]>(`${this.http_link}/classifications/list`);
  }

  getById = (id: number): Observable<Classification> => {
    return this.http.get<Classification>(`${this.http_link}/classifications/object/${id}`);
  }

  deleteItem = (id: number): Observable<Classification> => {
    return this.http.delete<Classification>(`${this.http_link}/classifications/delete/object/${id}`);
  }


}
