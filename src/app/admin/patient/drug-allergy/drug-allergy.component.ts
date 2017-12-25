import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../services/phr.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-drug-allergy',
  templateUrl: './drug-allergy.component.html',
  styles: []
})
export class DrugAllergyComponent implements OnInit {
  @Input('query') query = [];
  drugAllergy = [];

  constructor(
    private phrService: PhrService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  async getDrugAllergy() {
    if (this.query) {
      try {
        const rs: any = await this.phrService.getDrugAllergy(this.query);
        if (rs.ok) {
          this.drugAllergy = rs.rows;
        } else {
          this.alertService.error(JSON.stringify(rs.error));
        }
      } catch (error) {
        this.alertService.serverError();
      }
    }
  }

}
