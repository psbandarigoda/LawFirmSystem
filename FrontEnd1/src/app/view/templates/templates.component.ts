import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../service/client.service';
import {Client} from '../../model/Client';
import {Letters} from "../../model/Letters";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  Client: Array<Client> = new Array<Client>();
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


  // Affidavit Letter
  affidavitTitle: string;
  affidavitLetterContent: string;
  affidavitAddress: string;
  affidavitNIC: string;
  affidavitName: string;
  affidavitText: string;

  //Deed of Gift Letter
  DEEDTitle: string;
  DEEDContent: string;
  DEEDbeforeRegNo:string;
  DEEDNumber:string;
  DEEDRs:string;
  DEEDExDay:string;
  DEEDExMonth:string;
  DEEDExYear:string;
  DEEDNameOwner:string;
  DEEDOccupation:string;
  DEEDNameBuyer:string;
  DEEDAge:string;
  DEEDAddress:string;

  searchClientDetails: Client = new Client();


  constructor(private ClientService: ClientService, private route: Router, private clientService: ClientService) { }

  ngOnInit() {
  }

  searchClientByNIC(event: any){
    if (this.affidavitNIC.length != 0) {
      this.clientService.searchClientDetails(this.affidavitNIC).subscribe(res => {
        if (res == null) {
        } else {
          this.searchClientDetails = res;
          alert('Client is there');

          this.affidavitName = this.searchClientDetails.firstName;
          this.lastName1 = this.searchClientDetails.lastName;
          this.nameWithIns1 = this.searchClientDetails.nameWithIns;
          this.affidavitAddress = this.searchClientDetails.address;
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


  printAffidavitS() {
    this.affidavitTitle = 'දිවුරුම් ප්‍රකාශයයි';
    // tslint:disable-next-line:max-line-length
    this.affidavitLetterContent = this.affidavitAddress + ' හි පදිංචි ජාතික හැඳුනුම්පත් අංක ' + 'හිමි ' + this.affidavitName + ' වන මම බෞද්ධාගමිකයෙකු ' +
      ' වශයෙන් අවංකවත්, සත්‍ය ලෙසත්, ගරු ගම්භීරතා පූර්වකවත් විධිමත් ලෙස ප්‍රතිඥා දී ප්‍රකාශ කර සිටින වගනම්,' +
      ' 01.මෙම දිවුරුම් ප්‍රකාශයේ සිද්ධි ප්‍රකාශක මම වෙමි. ' + this.affidavitText +
      // tslint:disable-next-line:max-line-length
      ' ඉහත සදහන් ප්‍රකාශය සිද්ධි ප්‍රකාශක හට කියවා තේරුම් කර දීමෙන් පසු එහි සදහන් කරුණු සත්‍ය හා නිවැරදි බවට පළිගත් බවට හැඟී ගියෙන් ප්‍රතිඥා දී අත්සන් කරන්නට යෙදුනේ වර්ෂ 2020 ක්වූ    මස   වන දින.  දීය.';

    let affidavitLetterS = <Letters>{};
    affidavitLetterS.letter= this.affidavitLetterContent;
    affidavitLetterS.cID = this.affidavitNIC;
    this.ClientService.printLetters(affidavitLetterS).subscribe((result) => {
      if (result != null) {
        alert('Letter Print SuccessFully');
      }
    });
  }

  printAffidavitE() {
    this.affidavitTitle = 'AFFIDAVIT';
    // tslint:disable-next-line:max-line-length
    this.DEEDContent = '     <h3 style="text-align: center;  font-weight: bold;">AFFIDAVIT</h3>\n' +
      '                          <br/>\n' +
      '                          ' + this.affidavitName + '\n' +
      '                          ,belongs to the National Identity Card <br/>\n' +
      '                          ' + this.affidavitNIC + ' of \n' +
      '                          ' + this.affidavitAddress + '\n' +
      // tslint:disable-next-line:max-line-length
      '                          in the republic of Sri Lanka being a Buddhist <br/>do hereby solemnly sincerely and truly declare and affirm as follows,<br/><br/>\n' +
      '                          01.That I am the affirmant above named.<br/>\n' +
      // tslint:disable-next-line:max-line-length
      '                          ' + this.affidavitText + '<br/>\n' +
      '                          Read over declared and affirmed to and signed at .......  on this day of....<br/>\n' +
      '                          `<br/>\n' +
      '                          Affirmant<br/>\n' +
      '                          Before me.<br/>\n' +
      '                          Commissioner of Oaths\n' +
      '                          <br/><br/>';

    let affidavitLetterE = <Letters>{};
    affidavitLetterE.letter= this.affidavitLetterContent;
    affidavitLetterE.cID = this.affidavitNIC;
    this.ClientService.printLettersE(affidavitLetterE).subscribe((result) => {
      if (result != null) {
        alert('Letter Print SuccessFully');
      }
    });
  }


  printDeedEn(){
    this.DEEDTitle = 'Deed OF Gift';
    // tslint:disable-next-line:max-line-length
    this.affidavitLetterContent = '<div>\n' +
      '                    Before Registration : '+this.DEEDbeforeRegNo+'\n' +
      '                    <br/>\n' +
      '                    Number : '+this.DEEDNumber+'\n' +
      '                      <br/>\n' +
      '                    <h3 style="text-align: center;  font-weight: bold;">DEED OF GIFT</h3>\n' +
      '                    Rs. '+this.DEEDRs+'<br>\n' +
      '                    This deed of Gift is executed on '+this.DEEDExDay+' day of '+this.DEEDExMonth+' month of\n' +
      '                    '+this.DEEDExYear+' year by Sri./Smt '+this.DEEDNameOwner+', S/o./<br>\n' +
      '                    W/o'+this.DEEDNameBuyer+',occupation'+this.DEEDOccupation+', and aged<br>\n' +
      '                    '+this.DEEDAge+' years, residing at, '+this.DEEDAddress+' herein after called the DONOR. 1.<br>\n' +
      '                    red to as the DONEE. 2.\n' +
      '                  </div>';

    let DeedLetterEn = <Letters>{};
    DeedLetterEn.letter= this.DEEDContent;
    DeedLetterEn.cID = this.affidavitNIC;
    this.ClientService.deedLettersE(DeedLetterEn).subscribe((result) => {
      if (result != null) {
        alert('Letter Print SuccessFully');
      }
    });
  }

}
