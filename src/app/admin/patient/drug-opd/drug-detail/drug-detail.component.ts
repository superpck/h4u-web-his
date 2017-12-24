import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../../services/phr.service';

@Component({
  selector: 'app-drug-detail',
  templateUrl: './drug-detail.component.html',
  styles: []
})
export class DrugDetailComponent implements OnInit {
  @Input('drugOPD') drugOPD;
  drugDetail = [];

  constructor(
    private phrService: PhrService
  ) { }

  ngOnInit() {
    this.getDrugOpdDetail();
  }

  async getDrugOpdDetail() {
    try {
      const rs: any = await this.phrService.getLabFuDetail(this.drugOPD.HOSPCODE, this.drugOPD.PID, this.drugOPD.SEQ);
      if (rs.ok) {
        this.drugDetail = rs.rows;
      } else {
        // this.alertService.error(JSON.stringify(rs.error));
      }
    } catch (error) {
      // this.alertService.serverError();
    }
  }

}
