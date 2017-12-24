import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../services/phr.service';

@Component({
  selector: 'app-labfu',
  templateUrl: './labfu.component.html',
  styles: []
})
export class LabfuComponent implements OnInit {
  @Input('query') query;
  labfu = [];

  constructor(
    private phrService: PhrService
  ) { }

  ngOnInit() {
  }

  async getLabFu() {
    if (this.query) {
      try {
        const rs: any = await this.phrService.getLabFu();
        if (rs.ok) {
          this.labfu = rs.rows;
        } else {
          // this.alertService.error(JSON.stringify(rs.error));
        }
      } catch (error) {
        // this.alertService.serverError();
      }
    }
  }

}
