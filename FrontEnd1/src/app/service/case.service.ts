import { Injectable } from '@angular/core';
import {Client} from "../model/Client";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Case} from "../model/Case";
import {CaseItemImages} from "../model/CaseItemImages";

const URL ='/CaseController'

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http:HttpClient) { }

  // searchClientDetails(searchClientNIC: String) {
  //   return this.http.get<Client>(environment.backend_url +  URL + '/case/' + searchClientNIC);
  // }

  addCase(addcase: Case) {
    return this.http.post<Case>(environment.backend_url + URL + '/addCase',addcase);
  }

  uploadImg(formData){
    return this.http.post(environment.backend_url + URL + '/addCaseImages',formData);
  }

}
