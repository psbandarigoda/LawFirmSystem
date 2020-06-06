import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Appointment} from '../../model/Appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();
  formAppointment = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl(' ', Validators.required),
    venue: new FormControl('', Validators.required),
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routBacktoViewCase() {
    this.router.navigate(['/main/view-case']);
  }

}
