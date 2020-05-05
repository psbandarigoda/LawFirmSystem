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

    // tslint:disable-next-line:triple-equals
    if (this.router.url == '/main/dashboard') {
      this.headerText = 'Dashboard';
      // tslint:disable-next-line:triple-equals
    } else if (this.router.url == '/main/client-details') {
      this.headerText = 'ClientDetails';
      // tslint:disable-next-line:triple-equals
    } else if (this.router.url == '/main/filing-case') {
      this.headerText = 'FilingCase';
      // tslint:disable-next-line:triple-equals
    } else if (this.router.url == '/main/templates') {
      this.headerText = 'Templates';
    }
  }

  changeRoute(button) {
    // @ts-ignore
    console.log(button);
    // tslint:disable-next-line:triple-equals
    if (button == 'Dashboard') {
      this.router.navigate(['/main/dashboard']);
      // tslint:disable-next-line:triple-equals
    } else if (button == 'client Details') {
      this.router.navigate(['/main/client-details']);
      // tslint:disable-next-line:triple-equals
    } else if (button == 'filing Case') {
      this.router.navigate(['/main/filing-case']);
      // tslint:disable-next-line:triple-equals
    } else if (button == 'templates') {
      this.router.navigate(['/main/templates']);
    }

  }


}

