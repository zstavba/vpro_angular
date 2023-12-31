import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../dashboard/Classes/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private http_link: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  get = (): Observable<Article[]> => {
    return this.http.get<Article[]>(`${this.http_link}/article/list`);
  }

  getItemByCode = (code: number | string | any) : Observable<any> => {
    return this.http.get<any>(`${this.http_link}/articles/info/basic/${code}`);
  }
}
