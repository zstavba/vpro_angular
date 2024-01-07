import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dashboard/Classes/user';
import { UserInformation } from '../dashboard/Classes/user-information';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http_link: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  get = (): Observable<User[]> => {
    return this.http.get<User[]>(`${this.http_link}/users`);
  }

  getByType = (user_type: string): Observable<UserInformation[]> => {
    return this.http.get<UserInformation[]>(`${this.http_link}/user/type/${user_type}`);
  }


}
