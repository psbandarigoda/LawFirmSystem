import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Case} from '../model/Case';
import {Appointment} from "../model/Appointment";

const URL = '/AppointmentController';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  // searchClientDetails(searchClientNIC: String) {
  //   return this.http.get<Client>(environment.backend_url +  URL + '/case/' + searchClientNIC);
  // }

  addAppointment(addAppointment: Appointment) {
    return this.http.post<Appointment>(environment.backend_url + URL + '/addAppointments', addAppointment);
  }

  // uploadImg(formData) {
  //   return this.http.post(environment.backend_url + URL + '/addCaseImages', formData);
  // }

  getAllAppointments() {
    return this.http.get<Array<Appointment>>(environment.backend_url + URL + '/getAllAppointments');
  }

}
