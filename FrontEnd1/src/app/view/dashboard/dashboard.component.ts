import {Component, OnInit} from "@angular/core";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  time = new Date();
  curDate = new Date();

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);

  //   let calendarEl = document.getElementById('fullCalendar');
  //
  //   let calendar = new Calendar(calendarEl, {
  //     plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ]
  //   });

  }

}
