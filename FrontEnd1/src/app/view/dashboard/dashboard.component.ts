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
    let month = [10,11,12];
    let day = [1,2,3,4,5,6,7,8,9];
    month.forEach(res=>{
      if(res === this.curDate.getMonth() + 1){
        day.forEach(res2=>{
          if(res2 === this.curDate.getDate()) {
            formatted_date = this.curDate.getFullYear() + "-" + (this.curDate.getMonth() + 1) + "-0" + this.curDate.getDate();
          }else{
            formatted_date = this.curDate.getFullYear() + "-" + (this.curDate.getMonth() + 1) + "-" + this.curDate.getDate();
          }
        });
      }else{
        day.forEach(res3=>{
          if(res3 === this.curDate.getDate()) {
            formatted_date = this.curDate.getFullYear() + "-0" + (this.curDate.getMonth() + 1) + "-0" + this.curDate.getDate();
          }else{
            formatted_date = this.curDate.getFullYear() + "-0" + (this.curDate.getMonth() + 1) + "-" + this.curDate.getDate();
          }
        });
      }
    });
    return formatted_date;
  }

  timeConverter(){
    let formatted_time;
    let hours = [10,11,12];
    let min = [1,2,3,4,5,6,7,8,9];
    hours.forEach(res=>{
      if(res === this.time.getHours()){
        min.forEach(res2=>{
          if(res2 === this.time.getDate()) {
            formatted_time = this.time.getHours() + ":0" + this.time.getMinutes();
          }else{
            formatted_time = this.time.getHours() + ":" + this.time.getMinutes();
          }
        });
      }else{
        min.forEach(res3=>{
          if(res3 === this.time.getMinutes()) {
            formatted_time = "0"+this.time.getHours() + ":0" + this.time.getMinutes();
          }else{
            formatted_time = "0"+this.time.getHours() + ":" + this.time.getMinutes();
          }
        });
      }
    });
    return formatted_time;
  }

  appointmentTracking(){
    // let formatted_date = this.curDate.getFullYear()+ "-0" + (this.curDate.getMonth() + 1) + "-" + this.curDate.getDate();
    // let formatted_time =  this.curDate.getHours() + ":" + this.curDate.getMinutes();

    let formatted_date = this.dateConverter();
    let formatted_time = this.timeConverter();

    console.log(formatted_date+"   "+formatted_time);

    this.appointments.forEach(value => {
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

}
