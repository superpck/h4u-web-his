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

  person = {
    CID: null,
    MOPHID: null,
    PRENAME: null,
    NAME: null,
    LNAME: null,
    SEX: null,
    BIRTH: null
  };

  query;
  loading = false;

  constructor(
    private phrService: PhrService,
    private alertService: AlertService
  ) { }

  ngOnInit() { }

  enterSearch(event) {
    if (event.keyCode === 13 && !this.loading) {
      this.clearForm();
      this.getPerson();
    }
  }

  onSearch() {
    if (!this.loading) {
      this.clearForm();
      this.getPerson();
    }
  }

  async getPerson() {
    if (this.query) {
      try {
        this.loading = true;
        const rs: any = await this.phrService.getPerson(this.query);
        if (rs.ok) {
          this.person = rs.info[0];
          this.anc.getAnc();
          this.drugAllergy.getDrugAllergy();
          this.ncd.getNcdScreen();
          this.labfu.getLabFu();
          this.epi.getEpi();
          this.drugOPD.getLastDrug();
        } else {
          this.alertService.error(JSON.stringify(rs.error));
        }
        this.loading = false;
      } catch (error) {
        this.alertService.serverError();
        this.loading = false;
      }
    }
  }

  clearForm() {
    this.person = {
      CID: null,
      MOPHID: null,
      PRENAME: null,
      NAME: null,
      LNAME: null,
      SEX: null,
      BIRTH: null
    };
  }

}
