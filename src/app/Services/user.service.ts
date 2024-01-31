import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dashboard/Classes/user';
import { UserInformation } from '../dashboard/Classes/user-information';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http_link: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    ) {}

  get = (): Observable<User[]> => {
    return this.http.get<User[]>(`${this.http_link}/users`);
  }

  getUserById = (userID: number): Observable<User> => {
    return this.http.get<User>(`${this.http_link}/user/get/basic/${userID}`);
  }

  getUserInformationById = (userID: number): Observable<UserInformation> => {
    return this.http.get<UserInformation>(`${this.http_link}/user/get/info/${userID}`);
  }

  getByType = (user_type: string): Observable<UserInformation[]> => {
    return this.http.get<UserInformation[]>(`${this.http_link}/user/type/${user_type}`);
  }

  login = (user: User): Observable<User> => {
    return this.http.post<User>(`${this.http_link}/user/login`,user);
  }


  checkIfUserloggedIn  = (): boolean => {
    if(isPlatformBrowser(this.platformId)){
      let storageUser = localStorage?.getItem('user');

      if(storageUser != undefined || storageUser != null){
        let LoginUser = JSON.parse(storageUser) as User;
        return true;
      } else{
        return false;
      }
    }
    return false;
  }

}
