import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/Client";
import {Appointment} from "../../model/Appointment";
import {AppointmentService} from "../../service/appointment.service";

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.component.html',
  styleUrls: ['./appointment-summary.component.css']
})
export class AppointmentSummaryComponent implements OnInit {

  appointment: Appointment[] = new Array<Appointment>();

  searchItemValuesIf = true;
  startDate: Date;
  status: string = 'pending';
  endDate: string;
  myDate = new Date();

  milliseconds: number = this.myDate.getMilliseconds();

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.getAllAppointmentsPending();
    // this.getAllAppointmentsDone()
  }

  getAllAppointmentsPending() {
    this.startDate = null;
    this.appointmentService.getAllAppointmentsPending().subscribe(res => {
      if (res == null || res.length <= 0) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.appointment = res;
      }
      console.log(res);
    });
  }

  getAllAppointmentsDone() {
    this.startDate = null;
    this.appointmentService.getAllAppointmentsDone().subscribe(res => {
      if (res == null || res.length <= 0) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.appointment = res;
      }
      console.log(res);
    });

  }

  getAllAppointmentsByStatus(){
    if(this.status == 'pending'){
        this.getAllAppointmentsPending();
    }else{
      this.getAllAppointmentsDone();
    }

  }

  getAllAppointmentsByDate() {
    this.status = '';
    this.appointmentService.getAllAppointmentsByDate(this.startDate).subscribe(res => {
      if (res == null || res.length <= 0) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.appointment = res;
      }
      console.log(res);
    });

  }



}
