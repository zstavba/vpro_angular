import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Article } from '../dashboard/Classes/article';
import { ArticleType } from '../dashboard/Classes/article-type';
import { ArticleBasics } from '../dashboard/Classes/article-basics';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private http_link: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  get = (): Observable<ArticleBasics[]> => {
    return this.http.get<ArticleBasics[]>(`${this.http_link}/article/list`);
  }

  deleteArticle = (itemID: number): Observable<Article> => {
    return this.http.delete<Article>(`${this.http_link}/articles/delete/${itemID}`);
  }

  getItemByCode = (code: any) : Observable<Article> => {
    return this.http.get<Article>(`${this.http_link}/articles/info/basic/${code}`);
  }

  getArticleType = (): Observable<ArticleType[]> => {
    return this.http.get<ArticleType[]>(`${this.http_link}/article/types/list`)
  }
}
