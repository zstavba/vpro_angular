import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private http_link: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  getTax = (): Observable<any> => {
    return this.http.get<any>(`${this.http_link}/banks/tax/list`)
  }

}
