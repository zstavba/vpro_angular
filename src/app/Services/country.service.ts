import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../dashboard/Classes/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public http_link: string = "tttp://localhost:3000"

  constructor(private http: HttpClient) { }

  get = (id: number): Observable<Country> => {
    return this.http.get<Country>(`${this.http_link}/country/${id}`)
  } 

}
