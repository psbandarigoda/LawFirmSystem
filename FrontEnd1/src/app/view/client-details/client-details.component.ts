import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../service/client.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../model/Client';

@Component({
  selector: 'app-customer',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ClientService: ClientService, private route: Router ) { }

  client: Client = new Client();
  clientEdit: Client = new Client();


  // isValidFormSubmitted: boolean = null;
  form = new FormGroup({
    nic: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
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

  formEdit = new FormGroup({
    nic: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
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
  // updateCustomerDetails :Customer = new Customer();

  searchClientNIC: any;
  // tslint:disable-next-line:variable-name
  _id: string;
  firstName1: string;
  lastName1: string;
  userName1: string;
  address1: string;
  nic1: string;
  phone1: string;
  email1: string;
  country1: string;
  postal1: string;
  type1: string;
  aboutCus1: string;

  GOTOCustomer() {
    this.route.navigate(['/customer']);
  }

  ngOnInit() {

  }

  searchClientByNIC(event: any) {
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
          this.userName1 = this.searchClientDetails.userName;
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


  addClient() {
    // tslint:disable-next-line:prefer-const
    let cust: Client;
    this.ClientService.addCustomer(this.client).subscribe((result) => {
      if (result != null) {
        alert('Client Added Successfully');
        this.client = new Client();
        this.form.reset();
      }
    });
  }

  updateClient() {

    // let  cust :Client = new Client();
    // cust._id = this._id;
    // cust.firstName = this.firstName1;
    // cust.lastName = this.lastName1;
    // cust.userName = this.userName1;
    // cust.address = this.address1;
    // cust.nic = this.nic1;
    // cust.phone = this.phone1;
    // cust.email = this.email1;
    // cust.country = this.country1;
    // cust.postal = this.type1;
    // cust.aboutCus = this.aboutCus1;

    this.clientEdit._id = this._id;

    this.ClientService.updateClientDetails(this.clientEdit).subscribe((result) => {
      if (result != null) {
        alert('Client Details Updated Successfully');
        this.firstName1 = null;
        this.lastName1 = null;
        this.userName1 = null;
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

}
