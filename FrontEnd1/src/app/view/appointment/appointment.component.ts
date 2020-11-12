import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Appointment} from '../../model/Appointment';
import {AppointmentService} from "../../service/appointment.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  formAppointment = new FormGroup({
    title: new FormControl('', Validators.required),
    caseNo: new FormControl(' ', Validators.required),
    client: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    venue: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private activatedRoute:ActivatedRoute ,private appointmentService:AppointmentService) { }

  ngOnInit() {
    this.appointment.caseNo = this.activatedRoute.snapshot.paramMap.get("caseNo");
    this.appointment.client = this.activatedRoute.snapshot.paramMap.get("client");
    this.appointment.status = "pending";
  }

  routBacktoViewCase() {
    this.router.navigate(['/main/view-case']);
  }

  addAppointment(){
    this.appointmentService.addAppointment(this.appointment).subscribe((result) => {
      if (result != null) {
        alert('Appointment Added Successfully');
        this.appointment = new Appointment();
        this.formAppointment.reset();
      }
    });
  }

  addCourtDate(){
    this.appointment.title = "* Court Date";
    this.appointmentService.addAppointment(this.appointment).subscribe((result) => {
      if (result != null) {
        alert('Appointment Added Successfully');
        this.appointment = new Appointment();
        this.formAppointment.reset();
      }
    });
  }

}
