import { Component, OnInit } from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
// tslint:disable-next-line:import-spacing
import { concat } from  'rxjs';
import {Client} from '../../model/Client';
import {CaseService} from '../../service/case.service';
import {ClientService} from '../../service/client.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Case} from '../../model/Case';
import {CaseItemImages} from '../../model/CaseItemImages';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-filing-case',
  templateUrl: './filing-case.component.html',
  styleUrls: ['./filing-case.component.css']
})
export class FilingCaseComponent implements OnInit {

  public imgform: {
    title: string;
    image: File | null;
  };

  constructor(private caseService: CaseService, private clientService: ClientService, private formBuilder: FormBuilder) { }

  DJANGO_SERVER = 'http://127.0.0.1:8000';
  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver = false;

  caseImgs: CaseItemImages = new CaseItemImages();

  searchClientValueIf = true;
  searchClientDetails: Client = new Client();
  myDate: Date = new Date();
  stringDate :string = this.myDate.toString();


  // updateCustomerDetails :Customer = new Customer();

  searchClientNIC: any;
  // tslint:disable-next-line:variable-name
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
  // imgform: FormGroup;
  imgPath: any;
  clients: Client[] = new Array<Client>();

  case: Case = new Case();
  form = new FormGroup({
    caseNo: new FormControl('', Validators.required),
    title: new FormControl(' ', Validators.required),
    caseType: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  caseType: string;

  ngOnInit() {
    this.getAllClients();

    this.stringDate = formatDate(this.myDate, 'yyyy-MM-dd', 'en-US');

    this.case.caseType = 'Select Case';
    // this.imgform = this.formBuilder.group({
    //   title: new FormControl('', Validators.required),
    //   image: new FormControl(' ', Validators.required)
    // });

    this.imgform = {
      title: '',
      image: null
    };
  }

  fileOverBase(event): void {
    this.hasBaseDropZoneOver  =  event;
  }

  getFiles(): FileLikeObject[] {
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }
  upload() {
    const files = this.getFiles();
    console.log('ggggggggggg', files);
    const requests = [];
    files.forEach((file) => {
      const formData = new FormData();
      formData.append('file' , file.rawFile, file.name);
      this.caseImgs.imagesArray.push(file.rawFile);
      this.caseImgs.caseNo = '123v';
      requests.push(this.caseService.uploadImg(this.caseImgs));
    });

    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  restNIC(){
    this.searchClientNIC = '';
    this.nic1 = '';
    this.firstName1 = '';
    this.lastName1 = '';
    this.aboutCus1 = '';
  }

  searchClientByNIC(event: any) {
    if (this.searchClientNIC.length != 0) {
      this.clientService.searchClientDetails(this.searchClientNIC).subscribe(res => {
        if (res == null) {
          this.searchClientValueIf = true;
        } else {
          this.searchClientValueIf = false;
          alert('Client is there');

          this.searchClientDetails = res;
          console.log(this.searchClientDetails.email);
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

  addCase() {
    this.case.nic = this.nic1;
    this.case.date = this.stringDate;
    // this.case.caseType = this.caseType;
    console.log(this.case);
    this.caseService.addCase(this.case).subscribe((result) => {
      if (result != null) {
        alert('Case Added Successfully');
        this.case = new Case();
        this.form.reset();
      }
    });
  }

  setCaseType() {
    this.case.caseType = 'Curfew Law';
  }

  addimages() {
    // console.log(this.imgform.title);
    // console.log(this.imgform.image);
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(res => {
      this.clients = res;
      console.log(res);
    });
  }

}
