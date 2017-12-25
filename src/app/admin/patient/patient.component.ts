import { Component, OnInit, ViewChild } from '@angular/core';
import { PhrService } from '../../services/phr.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styles: []
})
export class PatientComponent implements OnInit {
  @ViewChild('anc') private anc: any;
  @ViewChild('drugAllergy') private drugAllergy: any;
  @ViewChild('ncd') private ncd: any;
  @ViewChild('labfu') private labfu: any;
  @ViewChild('epi') private epi: any;
  @ViewChild('drugOPD') private drugOPD: any;

  person = {};
  query;
  check = true;
  constructor(
    private phrService: PhrService,
    private alertService: AlertService
  ) { }

  ngOnInit() { }

  enterSearch(event) {
    
    if (event.keyCode === 13 && this.check === true) {
      this.getPerson();
      this.anc.getAnc();
      this.drugAllergy.getDrugAllergy();
      this.ncd.getNcdScreen();
      this.labfu.getLabFu();
      this.epi.getEpi();
      this.drugOPD.getLastDrug();
    }
    if (event.keyCode === 13) {
      this.check = true;
      }
  }

  async getPerson() {
    if (this.query) {
      try {
        const rs: any = await this.phrService.getPerson(this.query);
        if (rs.ok) {
          this.person = rs.info[0];
        } else {
          this.alertService.error(JSON.stringify(rs.error));
          this.check = false;
        }
      } catch (error) {
        this.alertService.serverError();
      }
    }
  }

}
