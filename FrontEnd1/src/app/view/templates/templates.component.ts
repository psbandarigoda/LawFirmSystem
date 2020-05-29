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

  Client: Array<Client> = new Array<Client>();

  // Affidavit Letter
  affidavitTitle: string;
  affidavitLetter: string;
  affidavitAddress: string;
  affidavitNIC: string;
  affidavitName: string;
  affidavitText: string;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ClientService: ClientService, private route: Router) { }

  ngOnInit() {
  }


  printAffidavitS() {
    this.affidavitTitle = 'දිවුරුම් ප්‍රකාශයයි';
    // tslint:disable-next-line:max-line-length
    this.affidavitLetter = this.affidavitAddress + ' හි පදිංචි ජාතික හැඳුනුම්පත් අංක ' + 'හිමි ' + this.affidavitName + ' වන මම බෞද්ධාගමිකයෙකු ' +
      ' වශයෙන් අවංකවත්, සත්‍ය ලෙසත්, ගරු ගම්භීරතා පූර්වකවත් විධිමත් ලෙස ප්‍රතිඥා දී ප්‍රකාශ කර සිටින වගනම්,' +
      ' 01.මෙම දිවුරුම් ප්‍රකාශයේ සිද්ධි ප්‍රකාශක මම වෙමි. ' + this.affidavitText +
      // tslint:disable-next-line:max-line-length
      ' ඉහත සදහන් ප්‍රකාශය සිද්ධි ප්‍රකාශක හට කියවා තේරුම් කර දීමෙන් පසු එහි සදහන් කරුණු සත්‍ය හා නිවැරදි බවට පළිගත් බවට හැඟී ගියෙන් ප්‍රතිඥා දී අත්සන් කරන්නට යෙදුනේ වර්ෂ 2020 ක්වූ    මස   වන දින.  දීය.';

    this.ClientService.printLetters(this.affidavitLetter).subscribe((result) => {
      if (result != null) {
        alert('Letter Print SuccessFully');
      }
    });
  }

  printAffidavitE() {
    this.affidavitTitle = 'AFFIDAVIT';
    // tslint:disable-next-line:max-line-length
    this.affidavitLetter = '     <h3 style="text-align: center;  font-weight: bold;">AFFIDAVIT</h3>\n' +
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

    this.ClientService.printLettersE(this.affidavitLetter).subscribe((result) => {
      if (result != null) {
        alert('Letter Print SuccessFully');
      }
    });
  }

}
