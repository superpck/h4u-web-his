import { ConsentService } from './../../services/consent.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-consent-validate',
  templateUrl: './consent-validate.component.html',
  styles: []
})
export class ConsentValidateComponent implements OnInit {
  cid: any;
  logs = [];
  jwtHelper: JwtHelper = new JwtHelper();
  fullname: any;
  hcode: any;
  perPage = 10;


  constructor(
    private consentService: ConsentService,
    private alertService: AlertService
  ) {
    const token = sessionStorage.getItem('token');
    const decoded: any = this.jwtHelper.decodeToken(token);
    this.fullname = decoded.fullname;
    this.hcode = decoded.hospcode;
  }
  ngOnInit() {
    this.getLogs();
  }

  enterSearch(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      this.search();
    }
  }

  async getLogs() {
    try {
      const rs: any = await this.consentService.getLogs(this.hcode);
      if (rs.ok) {
        this.logs = rs.rows;
      }
    } catch (error) {
      this.alertService.error(error);
    }
  }
  async search() {
    try {
      const rs: any = await this.consentService.search(this.cid, this.hcode, this.fullname);
      if (rs.ok) {
        this.alertService.success(`เลขบัตรประชาชนที่ ${this.cid} ลงทะเบียนแล้ว`);
      } else {
        this.alertService.error(`เลขบัตรประชาชนที่ ${this.cid} ยังไม่ได้ลงทะเบียน หรือ ไม่พบข้อมูล`);
      }
      this.getLogs();
    } catch (error) {
      this.alertService.error(error);
    }
  }
}
