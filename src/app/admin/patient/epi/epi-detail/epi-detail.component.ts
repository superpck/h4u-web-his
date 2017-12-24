import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../../services/phr.service';

@Component({
  selector: 'app-epi-detail',
  templateUrl: './epi-detail.component.html',
  styles: []
})
export class EpiDetailComponent implements OnInit {
  @Input('epi') epi;
  epiDetail = [];

  constructor(
    private phrService: PhrService
  ) { }

  ngOnInit() {
    this.getEpiDetail();
  }

  async getEpiDetail() {
    try {
      const rs: any = await this.phrService.getLabFuDetail(this.epi.HOSPCODE, this.epi.PID, this.epi.SEQ);
      if (rs.ok) {
        this.epiDetail = rs.rows;
      } else {
        // this.alertService.error(JSON.stringify(rs.error));
      }
    } catch (error) {
      // this.alertService.serverError();
    }
  }

}
