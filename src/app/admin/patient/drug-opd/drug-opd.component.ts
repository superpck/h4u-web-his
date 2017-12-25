import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../services/phr.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-drug-opd',
  templateUrl: './drug-opd.component.html',
  styles: []
})
export class DrugOpdComponent implements OnInit {
  @Input('query') query;
  drugOPD = [];

  constructor(
    private phrService: PhrService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  async getLastDrug() {
    if (this.query) {
      try {
        const rs: any = await this.phrService.getLastDrugs(this.query);
        if (rs.ok) {
          this.drugOPD = rs.rows;
        } else {
          this.alertService.error(JSON.stringify(rs.error));
        }
      } catch (error) {
        this.alertService.serverError();
      }
    }
  }

}
