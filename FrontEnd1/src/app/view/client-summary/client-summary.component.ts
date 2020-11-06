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

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(res => {
      if (res == null) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.clients = res;
      }
      console.log(res);
    });
  }

}
