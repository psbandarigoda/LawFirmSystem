import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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
      this.headerText = "Dashboard";
    } else if (this.router.url == '/main/client-details') {
      this.headerText = "ClientDetails";
    } else if (this.router.url == '/main/filing-case') {
      this.headerText = "FilingCase";
    }
  }

  changeRoute(button) {
    // @ts-ignore
    console.log(button);
    if (button == "Dashboard") {
      this.router.navigate(['/main/dashboard'])
    } else if (button == "client Details") {
      this.router.navigate(['/main/client-details'])
    }else if (button == "filing Case") {
      this.router.navigate(['/main/filing-case'])
    }

  }


}

