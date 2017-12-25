import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../services/phr.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-epi',
  templateUrl: './epi.component.html',
  styles: []
})
export class EpiComponent implements OnInit {
  @Input('query') query;
  epi = [];

  constructor(
    private phrService: PhrService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  async getEpi() {
    if (this.query) {
      try {
        const rs: any = await this.phrService.getEpi();
        if (rs.ok) {
          this.epi = rs.rows;
        } else {
          this.alertService.error(JSON.stringify(rs.error));
        }
      } catch (error) {
        this.alertService.serverError();
      }
    }
  }

}
