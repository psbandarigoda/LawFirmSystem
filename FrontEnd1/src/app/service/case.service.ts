import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Case} from '../model/Case';
import {LetterLocation} from "../model/LetterLocation";

const URL = '/CaseController';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http: HttpClient) { }

  // searchClientDetails(searchClientNIC: String) {
  //   return this.http.get<Client>(environment.backend_url +  URL + '/case/' + searchClientNIC);
  // }

  addCase(addcase: Case) {
    return this.http.post<Case>(environment.backend_url + URL + '/addCase', addcase);
  }

  uploadImg(formData) {
    return this.http.post(environment.backend_url + URL + '/addCaseImages', formData);
  }

  getAllCases() {
    return this.http.get<Array<Case>>(environment.backend_url + URL + '/getAllCases');
  }

  getAllCasesByDate(date:Date) {
    return this.http.get<Array<Case>>(environment.backend_url + URL + '/getAllCasesByDate/'+date);
  }

  getCasesByNIC(filterNIC:string) {
    return this.http.get<Array<Case>>(environment.backend_url + URL + '/getCasesByNIC/'+filterNIC);
  }

  filterCaseNo(filterCaseNo:string) {
    return this.http.get<Array<Case>>(environment.backend_url + URL + '/getCasesByCaseNo/'+filterCaseNo);
  }

  filterCaseType(filterCaseType:string) {
    return this.http.get<Array<Case>>(environment.backend_url + URL + '/getCasesByCaseType/'+filterCaseType);
  }

  getAllpdfByClient(clintID:string) {
    return this.http.get<Array<LetterLocation>>(environment.backend_url + URL + '/getAllpdfByClient/'+clintID);
  }

}
