import { MophService } from './../../services/moph.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-moph',
  templateUrl: './moph.component.html',
  styles: []
})
export class MophComponent implements OnInit {
  cid: any;
  moph = [];
  person = [];
  loading = false;
  cMoph = false;
  cPerson = false;
  constructor(private mophService: MophService) { }

  ngOnInit() {
  }
  async checkmoph() {
    this.loading = true;
    const rsMoph: any = await this.mophService.getMoph(this.cid);
    this.moph = [];
    this.cMoph = false;
    this.cPerson = false;
    if (rsMoph.ok) {
      if (!rsMoph.rows.message) {
        this.moph.push(rsMoph.rows);
        this.cMoph = true;
        const rsPerson: any = await this.mophService.getPerson(this.cid);
        console.log(rsPerson);
        if (rsPerson.ok) {
            this.person = rsPerson.rows;
            this.cPerson = true;
        }
      }
    }
    this.loading = false;
  }
  enter(e) {
    if (e.keyCode === 13) {
      this.checkmoph();
    }
  }
}
