import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Country } from '../dashboard/Classes/country';
import { ZipCode } from '../dashboard/Classes/zip-code';
import { CustomTarrifs } from '../dashboard/Classes/custom-tarrifs';
import { Language } from '../dashboard/Classes/language';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public http_link: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  get = (id: number): Observable<Country> => {
    return this.http.get<Country>(`${this.http_link}/country/${id}`)
  } 

  getList = (): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.http_link}/country`)
  }

  getCostumsTarrifs = (): Observable<CustomTarrifs[]> => {
    return this.http.get<CustomTarrifs[]>(`${this.http_link}/country/custom/tariffs`)
  }
  
  getZipCode = (): Observable<ZipCode[]> => {
    return this.http.get<ZipCode[]>(`${this.http_link}/country/zip_code`)
  }

  getLanguage = (): Observable<Language[]> => {
    return this.http.get<Language[]>(`${this.http_link}/country/languages`);
  }


}
