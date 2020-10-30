import { Component, OnInit } from '@angular/core';
import {CaseService} from '../../service/case.service';
import {Case} from '../../model/Case';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-case',
  templateUrl: './view-case.component.html',
  styleUrls: ['./view-case.component.css']
})
export class ViewCaseComponent implements OnInit {

  cases: Case[] = new Array<Case>();
  searchItemValuesIf = true;
  filterNIC: string;
  filterCaseNo: string;
  filterCaseType: string;

  constructor(private caseService: CaseService, private router: Router) { }

  ngOnInit() {
    this.getAllCases();
  }

  routAppointment(caseNo,client) {
    this.router.navigate(['/main/appointment',{caseNo: caseNo, client: client }]);
  }

  routViewInDetail(caseNo,client) {
    this.router.navigate(['/main/View-Case-In-Detail',{caseNo: caseNo, client: client }]);
  }

  getAllCases() {
    this.caseService.getAllCases().subscribe(res => {
      if (res == null) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.cases = res;
      }
      console.log(res);
    });
  }

  getCasesByNIC(){
    this.caseService.getCasesByNIC(this.filterNIC).subscribe(res => {
      if (res == null) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.cases = res;
      }
      console.log(res);
    });
  }

  getCasesByCaseNo(){
    this.caseService.filterCaseNo(this.filterCaseNo).subscribe(res => {
      if (res == null) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.cases = res;
      }
      console.log(res);
    });
  }

  getCasesByCaseType(){
    this.caseService.filterCaseType(this.filterCaseType).subscribe(res => {
      if (res == null) {
        this.searchItemValuesIf = true;
      } else {
        this.searchItemValuesIf = false;
        this.cases = res;
      }
      console.log(res);
    });
  }

}
