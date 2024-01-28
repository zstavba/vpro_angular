import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WarehouseCategories } from '../dashboard/Classes/warehouse-categories';
import { WarehouseUnits } from '../dashboard/Classes/warehouse-units';
import { WarehouseLocation } from '../dashboard/Classes/warehouse-location';
import { CostCities } from '../dashboard/Classes/cost-cities';
import { OrganizationalUnits } from '../dashboard/Classes/organizational-units';
import { Areas } from '../dashboard/Classes/areas';
import { Warehouse } from '../dashboard/Classes/warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private http_link: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  get = (): Observable<Warehouse[]> => {
    return this.http.get<Warehouse[]>(`${this.http_link}/warehouse/list`);
  }

  getCategories = (): Observable<WarehouseCategories[]> => {
    return this.http.get<WarehouseCategories[]>(`${this.http_link}/warehouse/categories`)
  }

  getUnits = (): Observable<WarehouseUnits[]> => {
    return this.http.get<WarehouseUnits[]>(`${this.http_link}/warehouse/units`);
  }

  getLocations = (): Observable<WarehouseLocation[]> => {
    return this.http.get<WarehouseLocation[]>(`${this.http_link}/warehouse/locations`)
  }

  getCostCities = (): Observable<CostCities[]> => {
    return this.http.get<CostCities[]>(`${this.http_link}/warehouse/cost/cities`)
  } 

  getOrganizationalUnits = (): Observable<OrganizationalUnits[]> => {
    return this.http.get<OrganizationalUnits[]>(`${this.http_link}/warehouse/organizational/unit`)
  }
  
  getAreas = (): Observable<Areas[]> => {
    return this.http.get<Areas[]>(`${this.http_link}/warehouse/areas`);
  }



}
