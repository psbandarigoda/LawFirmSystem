import { Component, OnInit } from '@angular/core';
import {CaseService} from "../../service/case.service";
import {Router} from "@angular/router";
import {Case} from "../../model/Case";

@Component({
  selector: 'app-case-summary',
  templateUrl: './case-summary.component.html',
  styleUrls: ['./case-summary.component.css']
})
export class CaseSummaryComponent implements OnInit {

  cases: Case[] = new Array<Case>();
  searchItemValuesIf = true;

  constructor(private caseService: CaseService, private router: Router) { }

  ngOnInit() {
    this. getAllCases();
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

}
