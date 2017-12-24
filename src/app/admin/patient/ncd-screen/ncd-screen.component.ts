import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../services/phr.service';

@Component({
  selector: 'app-ncd-screen',
  templateUrl: './ncd-screen.component.html',
  styles: []
})
export class NcdScreenComponent implements OnInit {
  @Input('query') query;
  ncdScreen = [];

  constructor(
    private phrService: PhrService
  ) { }

  ngOnInit() {
  }

  async getNcdScreen() {
    if (this.query) {
      try {
        const rs: any = await this.phrService.getNcdScreen();
        if (rs.ok) {
          this.ncdScreen = rs.rows;
        } else {
          // this.alertService.error(JSON.stringify(rs.error));
        }
      } catch (error) {
        // this.alertService.serverError();
      }
    }
  }

}
