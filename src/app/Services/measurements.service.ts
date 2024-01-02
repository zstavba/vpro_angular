import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeasurementUnits } from '../dashboard/Classes/measurement-units';

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {
  
  private http_link: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  get = (): Observable<any> => {
    return this.http.get<any>(`${this.http_link}/units/list`);
  }


}
