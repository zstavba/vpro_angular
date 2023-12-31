import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  private http_link: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getAlternatives = (): Observable<any> => {
      return this.http.get<any>(`${this.http_link}/production/alternatives`);
  }


}