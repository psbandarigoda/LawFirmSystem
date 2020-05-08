import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../service/client.service';
import {Client} from '../../model/Client';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  letter: string;
  Client: Array<Client> = new Array<Client>();

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ClientService: ClientService, private route: Router) { }

  ngOnInit() {
  }


  printReport() {
    this.letter = 'Initializing Spring DispatcherServlet';
    this.ClientService.printLetters(this.letter).subscribe((result) => {
      if (result != null) {
        alert('Letter Print SuccessFully');
      }
    });
  }

}
