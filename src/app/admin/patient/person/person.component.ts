import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: []
})
export class PersonComponent implements OnInit {
  @Input('person') person;

  constructor() { }

  ngOnInit() {
  }

}
