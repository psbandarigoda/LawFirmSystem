import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../service/client.service";
import {Client} from "../../model/Client";
import {CaseService} from "../../service/case.service";
import {Case} from "../../model/Case";
import {LetterLocation} from "../../model/LetterLocation";

@Component({
  selector: 'app-view-case-in-detail',
  templateUrl: './view-case-in-detail.component.html',
  styleUrls: ['./view-case-in-detail.component.css']
})
export class ViewCaseInDetailComponent implements OnInit {

  nic1: string;
  firstName1: string;
  lastName1: string;
  aboutCus1: string;
  caseNo: string;
  client: string;
  searchClientValueIf = true;
  searchPDFValueIf = true;
  searchClientDetails: Client = new Client();
  isHideReceipt = false;
  pdf: LetterLocation[] = new Array<LetterLocation>();
  letter : any[];
  pdfSrc = "../../../assets/data/"+this.client+"/"+"AffidavitEn_2020-10-31_03-50-01.pdf";
  pdfSrcArray: any[];
  // pdfSrc = "../../../data/00000055v/AffidavitEn_2020-10-31_03-23-57.pdf";

  constructor(private router: Router, private activatedRoute:ActivatedRoute, private clientService: ClientService, private caseService:CaseService) { }

  ngOnInit() {
    this.caseNo = this.activatedRoute.snapshot.paramMap.get("caseNo");
    this.client = this.activatedRoute.snapshot.paramMap.get("client");
    console.log(this.client);
    this.searchClientByNIC();
    this.getAllpdfByClient();
  }

  toggle() {
    this.isHideReceipt = !this.isHideReceipt;
  }

  download() {
    const blob = this.pdfSrc;
    // saveAs(blob, 'test1.pdf');
  }

  routBacktoViewCase() {
    this.router.navigate(['/main/view-case']);
  }

  searchClientByNIC() {
    if (this.client!= null) {
      this.clientService.searchClientDetails(this.client).subscribe(res => {
        if (res == null) {
          this.searchClientValueIf = true;
        } else {
          this.searchClientValueIf = false;
          this.searchClientDetails = res;
          console.log(this.searchClientDetails.email);
          // this._id = this.searchClientDetails._id;
          this.firstName1 = this.searchClientDetails.firstName;
          this.lastName1 = this.searchClientDetails.lastName;
          // this.userName1 = this.searchClientDetails.userName;
          // this.address1 = this.searchClientDetails.address;
          this.nic1 = this.searchClientDetails.nic;
          // this.phone1 = this.searchClientDetails.phone;
          // this.email1 = this.searchClientDetails.email;
          // this.country1 = this.searchClientDetails.country;
          // this.postal1 = this.searchClientDetails.postal;
          this.aboutCus1 = this.searchClientDetails.aboutCus;
        }
      });
    }
  }

  getAllpdfByClient(){
    let arrayres;
    this.caseService.getAllpdfByClient(this.client).subscribe(res => {
      if (res == null) {
        this.searchPDFValueIf = true;
      } else {
        this.searchPDFValueIf = false;
        this.pdf = res;
        this.pdf.forEach(pdf=>{
          let name= pdf.letterLocation;
          pdf.letterLocation = "../../../assets/data/"+this.client+"/"+name;
        })
      }
    });
  }

}
