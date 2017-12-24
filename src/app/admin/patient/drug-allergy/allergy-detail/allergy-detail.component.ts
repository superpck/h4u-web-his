import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-allergy-detail',
  templateUrl: './allergy-detail.component.html',
  styles: []
})
export class AllergyDetailComponent implements OnInit {

  @Input('detail') detail;

  constructor() { }

  ngOnInit() {
  }

}
