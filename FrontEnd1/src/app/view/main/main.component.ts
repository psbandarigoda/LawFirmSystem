import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  headerText: string;

  constructor(private router: Router) {

    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });

  }

  ngOnInit() {
  }

  setHeaderTextAndButtons() {

    if (this.router.url == '/main/dashboard') {
      this.headerText = 'Dashboard';
    } else if (this.router.url == '/main/client-details') {
      this.headerText = 'Add Client Details';
    } else if (this.router.url == '/main/client-details-edit') {
      this.headerText = 'Client Details Edit';
    } else if (this.router.url == '/main/filing-case') {
      this.headerText = 'Filing Case';
    } else if (this.router.url == '/main/view-case') {
      this.headerText = 'View Case';
    } else if (this.router.url == '/main/templates') {
      this.headerText = 'Templates';
    } else if (this.router.url == '/main/clientSummary') {
      this.headerText = 'Client Summary';
    } else if (this.router.url == '/main/caseSummary') {
      this.headerText = 'Case Summary';
    }else if (this.router.url == '/main/appointmentSummary') {
      this.headerText = 'AppointmentSummary';
    }
  }

  changeRoute(button) {
    console.log(button);
    if (button == 'Dashboard') {
      this.router.navigate(['/main/dashboard']);
    } else if (button == 'Add client') {
      this.router.navigate(['/main/client-details']);
    } else if (button == 'Edit client') {
      this.router.navigate(['/main/client-details-edit']);
    } else if (button == 'filing Case') {
      this.router.navigate(['/main/filing-case']);
    } else if (button == 'view Case') {
      this.router.navigate(['/main/view-case']);
    } else if (button == 'templates') {
      this.router.navigate(['/main/templates']);
    } else if (button == 'Client Summary') {
      this.router.navigate(['/main/clientSummary']);
    } else if (button == 'Case Summary') {
      this.router.navigate(['/main/caseSummary']);
    } else if (button == 'Appointment Summary') {
      this.router.navigate(['/main/appointmentSummary']);
    }

  }


}

