import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ncd-detail',
  templateUrl: './ncd-detail.component.html',
  styles: []
})
export class NcdDetailComponent implements OnInit {
  @Input('detail') detail;

  constructor() { }

  ngOnInit() {
  }

}
