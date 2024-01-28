import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRates } from '../dashboard/Classes/exchange-rates';
import { OpenMode } from '../dashboard/Classes/open-mode';
import { HttpClient } from '@angular/common/http';
import { CreditNote } from '../dashboard/Classes/credit-note';
import { Fakturing } from '../dashboard/Classes/fakturing';
import { SupplierOrder } from '../dashboard/Classes/supplier-order';
import { CostumerOrder } from '../dashboard/Classes/costumer-order';

@Injectable({
  providedIn: 'root'
})
export class CommercialService {

  private http_link: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getOpenMode = () : Observable<OpenMode[]> => {
    return this.http.get<OpenMode[]>(`${this.http_link}/commerical/open/mode`);
  }

  getExchangeRates = (): Observable<ExchangeRates[]> =>{
    return this.http.get<ExchangeRates[]>(`${this.http_link}/commerical/exchange/rates`);
  }

  getCreditNote = (): Observable<CreditNote[]> => {
    return this.http.get<CreditNote[]>(`${this.http_link}/commercial/creadit/note`);
  }

  getFakturing = (): Observable<Fakturing[]> => {
    return this.http.get<Fakturing[]>(`${this.http_link}/commercial/fakturing`);
  }

  getSupplierOrder = (): Observable<SupplierOrder[]> => {
    return this.http.get<SupplierOrder[]>(`${this.http_link}/commercial/supplier/orders`);
  }

  getCustomerOrder = (): Observable<CostumerOrder[]> => {
    return this.http.get<CostumerOrder[]>(`${this.http_link}/commercial/costumer/orders`)
  }

}
