import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../model/Appointment";
import {AppointmentService} from "../../service/appointment.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appointmentService:AppointmentService) {
  }

  time = new Date();
  curDate = new Date();
  appointments: Appointment[] = new Array<Appointment>();
  updateStatusAppoints: Appointment = new Appointment();
  searchItemValuesIf = true;
  nowGoingAppointment = true;
  messageDisplay = 'Event Not Found on This Time';
  messageColour = 'danger';

  addAppointmentData: Appointment = new Appointment();
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    caseNo: new FormControl(' ', Validators.required),
    client: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    venue: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.getAllAppointments();

    setInterval(() => {
      this.time = new Date();
    }, 1000);

  //   let calendarEl = document.getElementById('fullCalendar');
  //
  //   let calendar = new Calendar(calendarEl, {
  //     plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ]
  //   });
    setInterval(() => {
    window.location.reload();
    }, 40000);
  }

  DoneAppointment(){}

  addAppointment(){
    this.appointmentService.addAppointment(this.addAppointmentData).subscribe((result) => {
      if (result != null) {
        alert('Appointment Added Successfully');
        this.addAppointmentData = new Appointment();
        this.form.reset();
      }
    });
  }

  getAllAppointments() {
    this.appointmentService.getAllAppointments().subscribe(res => {
      if (res == null) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.appointments = res;
        this.appointmentTracking();
      }
      console.log(res);
    });
  }

  dateConverter(){
    let formatted_date;
    let month_number=this.curDate.getMonth()+1;

    if(month_number < 10){
      if(this.curDate.getDate() < 10){
        formatted_date = this.curDate.getFullYear() + "-0" + (month_number) + "-0" + this.curDate.getDate();
      }else {
        formatted_date = this.curDate.getFullYear() + "-" + (month_number) + "-" + this.curDate.getDate();
      }
    }else{
      if(this.curDate.getDate() < 10){
        formatted_date = this.curDate.getFullYear() + "-" + (month_number) + "-0" + this.curDate.getDate();
      }else {
        formatted_date = this.curDate.getFullYear() + "-" + (month_number) + "-" + this.curDate.getDate();
      }
    }
    return formatted_date;
  }

  timeConverter(){
    let formatted_time;

    if(this.time.getHours() < 10){
      if(this.time.getMinutes() < 10){
        formatted_time = "0" + this.time.getHours() + ":0" + this.time.getMinutes();
      }else{
        formatted_time = "0" + this.time.getHours() + ":" + this.time.getMinutes();
      }
    }else{
      if(this.time.getMinutes() < 10){
        formatted_time = this.time.getHours() + ":0" + this.time.getMinutes();
      }else{
        formatted_time = this.time.getHours() + ":" + this.time.getMinutes();
      }
    }
    return formatted_time;
  }

  appointmentTracking(){
    // let formatted_date = this.curDate.getFullYear()+ "-0" + (this.curDate.getMonth() + 1) + "-" + this.curDate.getDate();
    // let formatted_time =  this.curDate.getHours() + ":" + this.curDate.getMinutes();

    let formatted_date = this.dateConverter();
    let formatted_time = this.timeConverter();

    console.log("genareted"+formatted_date+"   "+formatted_time);

    this.appointments.forEach(value => {
      console.log("system"+value.date+"   "+value.time);

      if(value.date === formatted_date && value.time === formatted_time){

          let audio = new Audio();
          audio.src = "../../../assets/tone/Gentle-wake-alarm-clock.mp3";
          audio.load();
          audio.play();

          this.messageColour = 'success';
          this.messageDisplay = value.title+'-----'+value.caseNo+'-----'+value.client+'-----'+value.venue

          value.status = 'done';
          this.updateStatusAppoints = value;
          this.appointmentService.updateAppointmentStatus(this.updateStatusAppoints).subscribe((result) => {
            if (result != null) {
              console.log('status update success');
            }
          });

        }
      });
  }

  sendSMS(){
    let phone="94773638063"
    let password="5584"
    let receiver="94775864592"
    let message="Test+You+have+meeting"
    this.appointmentService.sendSMS(phone,password,receiver,message).subscribe(res => {
      if (res == null) {
      } else {

      }
      console.log(res);
    });
  }

}
