import { Component, OnInit, Input } from '@angular/core';
import { PhrService } from '../../../../services/phr.service';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-epi-detail',
  templateUrl: './epi-detail.component.html',
  styles: []
})
export class EpiDetailComponent implements OnInit {
  @Input('epi') epi;
  epiDetail = [];

  constructor(
    private phrService: PhrService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

}
