import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/Client";

@Component({
  selector: 'app-client-summary',
  templateUrl: './client-summary.component.html',
  styleUrls: ['./client-summary.component.css']
})
export class ClientSummaryComponent implements OnInit {

  clients: Client[] = new Array<Client>();
  searchItemValuesIf = true;
  startDate : Date;
  endDate : string;
  myDate = new Date();

  milliseconds :number = this.myDate.getMilliseconds();

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(res => {
      if (res == null || res.length <= 0) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.clients = res;
      }
      console.log(res);
    });
  }

  getAllClientsByDate() {
    this.clientService.getAllClientsByDate(this.startDate).subscribe(res => {
      if (res == null || res.length <= 0) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.clients = res;
      }
      console.log(res);
    });
    //
    // this.clients.forEach(res =>{
    //   this.startDate.toISOString()
    // })

  }

}
