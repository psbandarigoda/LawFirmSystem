import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Client} from '../model/Client';
import pako from 'pako';
import {map, tap} from 'rxjs/internal/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Letters} from "../model/Letters";


const URL = '/ClientController';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private clientDetails: any;

  constructor(private http: HttpClient) { }

  addCustomer(client: Client) {
    return this.http.post<Client>(environment.backend_url + URL + '/addClient', client);
  }

  // tslint:disable-next-line:ban-types
  searchClientDetails(searchClientNIC: String) {
    return this.http.get<Client>(environment.backend_url +  URL + '/client/' + searchClientNIC);
  }

  updateClientDetails(UpdateClientDetails: Client) {
    return this.http.post<Client>(environment.backend_url + URL + '/updateClient', UpdateClientDetails);
  }

  // tslint:disable-next-line:ban-types
  printLetters(ClientLetter: Letters) {
    return this.http.post<Letters>(environment.backend_url + URL + '/printLetterS/', ClientLetter);
  }

  // tslint:disable-next-line:ban-types
  printLettersE(ClientLetter: Letters) {
    return this.http.post<Letters>(environment.backend_url + URL + '/printLetterE/', ClientLetter);
  }

  getAllClients() {
    return this.http.get<Array<Client>>(environment.backend_url + URL + '/getAllClient');
  }


  // init(searchClientNIC: String) {
  //   return this.searchClientDetails(searchClientNIC).subscribe(res => {
  //     try {
  //       if (res) {
  //         this.clientDetails = res;
  //         console.log(this.clientDetails);
  //       }
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   });
  // }

  decode(encodedStr: any) {
    const gzip = encodedStr;
    const byteArray = new Uint8Array(gzip);
    const inflatedStr = pako.inflate(byteArray, {to: 'string'});
    return JSON.parse(inflatedStr);
  }

  // searchClientDetails(searchClientNIC: String) : Observable<any>{
  //   try {
  //     return this.http.get(environment.backend_url +  URL + '/client/' + searchClientNIC).pipe(map(
  //       res => this.decode(res)
  //     ), tap(res => res));
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }

  // CusReport() {
  //
  //   return this.http.get<Array<CustomerReportDTO>>(environment.backend_url + URL + '/getCusDetail');
  //
  // }

  // deleteCustomer(cusID: number) {
  //   return this.http.delete<number>(environment.backend_url + URL + '/deleteCustomer/' + cusID);
  // }
  //
  // searchCustomerPoints(searchCustomerID: String) {
  //
  //   return this.http.get<Customer>(environment.backend_url +  URL + '/searchByCustomerID/' + searchCustomerID);
  // }
  //
  // updateLoyaltyPoints(updateLoyaltyPoints: Customer) {
  //   return this.http.post<Customer>(environment.backend_url + URL + '/updateLoyaltyPoints',updateLoyaltyPoints);
  // }

  // printCustomerReport(CustomerReport: Array<CustomerReportDTO>) {
  //   return this.http.post<String>(environment.backend_url + URL + '/printCustomerReport/',CustomerReport);
  //
  // }
}


