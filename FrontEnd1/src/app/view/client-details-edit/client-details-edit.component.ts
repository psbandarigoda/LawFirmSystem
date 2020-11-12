import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/Client";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClientService} from "../../service/client.service";

@Component({
  selector: 'app-client-details-edit',
  templateUrl: './client-details-edit.component.html',
  styleUrls: ['./client-details-edit.component.css']
})
export class ClientDetailsEditComponent implements OnInit {

  client: Client = new Client();
  clientEdit: Client = new Client();

  formEdit = new FormGroup({
    nic: new FormControl('', Validators.required),
    nameWithIns: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl(' ', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    postal: new FormControl('', Validators.required),
    aboutCus: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });
  searchClientValueIf = true;
  searchClientDetails: Client = new Client();
  searchClientNIC: any;
  _id: string;
  firstName1: string;
  lastName1: string;
  nameWithIns1: string;
  address1: string;
  nic1: string;
  phone1: string;
  email1: string;
  country1: string;
  postal1: string;
  type1: string;
  aboutCus1: string;
  clients: Client[] = new Array<Client>();
  selectedClient1: string;

  constructor(private ClientService: ClientService, private route: Router) {
  }

  GOTOCustomer() {
    this.route.navigate(['/customer']);
  }

  ngOnInit() {
    this.getAllClients();
  }

  searchClientByNIC(event: any) {
    // tslint:disable-next-line:triple-equals
    if (this.searchClientNIC.length != 0) {
      this.ClientService.searchClientDetails(this.searchClientNIC).subscribe(res => {
        if (res == null) {
          this.searchClientValueIf = true;
        } else {
          this.searchClientValueIf = false;
          alert('Client is there');
          // Swal.fire({
          //   text: 'Hello!',
          //   icon: 'success'
          // });

          this.searchClientDetails = res;
          this.formEdit.value.address = this.searchClientDetails.address;

          this._id = this.searchClientDetails._id;

          this.firstName1 = this.searchClientDetails.firstName;
          this.lastName1 = this.searchClientDetails.lastName;
          this.nameWithIns1 = this.searchClientDetails.nameWithIns;
          this.address1 = this.searchClientDetails.address;
          this.nic1 = this.searchClientDetails.nic;
          this.phone1 = this.searchClientDetails.phone;
          this.email1 = this.searchClientDetails.email;
          this.country1 = this.searchClientDetails.country;
          this.postal1 = this.searchClientDetails.postal;
          this.aboutCus1 = this.searchClientDetails.aboutCus;
        }
      });
    }

  }

  updateClient() {

    if(this.clientEdit.nic == null){this.clientEdit.nic = this.nic1;}
    if(this.clientEdit.firstName == null){this.clientEdit.firstName = this.firstName1;}
    if(this.clientEdit.lastName == null){this.clientEdit.lastName = this.lastName1;}
    if(this.clientEdit.nameWithIns == null){this.clientEdit.nameWithIns = this.nameWithIns1;}
    if(this.clientEdit.address == null){this.clientEdit.address = this.address1;}
    if(this.clientEdit.phone == null){this.clientEdit.phone = this.phone1;}
    if(this.clientEdit.email == null){this.clientEdit.email = this.email1;}
    if(this.clientEdit.country == null){this.clientEdit.country = this.country1;}
    if(this.clientEdit.postal == null){this.clientEdit.postal = this.postal1;}
    if(this.clientEdit.aboutCus == null){this.clientEdit.aboutCus = this.aboutCus1;}

    this.clientEdit._id = this._id;

    this.ClientService.updateClientDetails(this.clientEdit).subscribe((result) => {
      if (result != null) {
        alert('Client Details Updated Successfully');
        this.firstName1 = null;
        this.lastName1 = null;
        this.nameWithIns1 = null;
        this.address1 = null;
        this.nic1 = null;
        this.phone1 = null;
        this.email1 = null;
        this.country1 = null;
        this.postal1 = null;
        this.aboutCus1 = null;

      }
    });
  }

  getAllClients() {
    this.ClientService.getAllClients().subscribe(res => {
      this.clients = res;
      console.log(res);
    });
  }

  // deleteCustomer(){
  //   this.ClientService.deleteCustomer(this.searchClientDetails.cusID).subscribe((result)=>{
  //
  //       if(result == null){
  //         // alert('Customer Delete Successfully');
  //         this.searchClientDetails = new Customer();
  //       }else{
  //         // alert('Customer Delete Fail');
  //       }
  //   });
  // }

  getSelectedClientDetails(event: any) {
    console.log('print one ccc' + ' -- ' + this.selectedClient1);
  }

}
