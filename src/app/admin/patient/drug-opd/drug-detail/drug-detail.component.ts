import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../../services/phr.service';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-drug-detail',
  templateUrl: './drug-detail.component.html',
  styles: []
})
export class DrugDetailComponent implements OnInit {
  @Input('drugOPD') drugOPD;
  drugDetail = [];

  constructor(
    private phrService: PhrService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

}
