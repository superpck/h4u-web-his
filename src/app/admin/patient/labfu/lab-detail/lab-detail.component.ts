import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../../services/phr.service';

@Component({
  selector: 'app-lab-detail',
  templateUrl: './lab-detail.component.html',
  styles: []
})
export class LabDetailComponent implements OnInit {
  @Input('labfu') labfu;
  labfuDetail = [];

  constructor(
    private phrService: PhrService
  ) { }

  ngOnInit() {
    this.getLabFuDetail();
  }

  async getLabFuDetail() {
    try {
      const rs: any = await this.phrService.getLabFuDetail(this.labfu.HOSPCODE, this.labfu.PID, this.labfu.SEQ);
      if (rs.ok) {
        this.labfuDetail = rs.rows;
      } else {
        // this.alertService.error(JSON.stringify(rs.error));
      }
    } catch (error) {
      // this.alertService.serverError();
    }
  }

}
