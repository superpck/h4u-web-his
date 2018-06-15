import { AlertService } from './../../../services/alert.service';
import { ServiceService } from './../../../services/service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-request',
  templateUrl: './detail-request.component.html',
  styles: []
})
export class DetailRequestComponent implements OnInit {

  // detail = [{ hn: '40701', name: { title_name: 'test', first_name: 'test', last_name: 'test' }, date_serve: '123', cid: '123' }];
  detail: any = [];
  @Input() details: any;
  hcode: any = '';
  hn: any = '';
  dateServe: any = '';
  titleName: any = '';
  firstName: any = '';
  lastName: any = '';
  requestId: any = '';
  registerId: any = '';
  cid: any = '';

  openLoading = false;
  constructor(
    private serviceService: ServiceService,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.getDetail();
    this.getService();
  }

  getDetail() {
    this.dateServe = this.details.date_serve;
    this.hn = this.details.hn;
    this.hcode = this.details.hcode;
    this.requestId = this.details.request_id;
    this.registerId = this.details.register_id;
    this.titleName = this.details.name.title_name;
    this.firstName = this.details.name.first_name;
    this.lastName = this.details.name.last_name;
    this.cid = this.details.cid;
  }

  async getService() {
    this.openLoading = true;
    try {
      console.log(this.hn, this.dateServe, this.requestId, this.registerId);

      const rs: any = await this.serviceService.getService(this.hn, this.dateServe, this.requestId, this.registerId);
      if (rs.ok) {
        this.detail = rs.rows;
        console.log(this.detail);
        console.log('title_name', this.detail.profile.name.title_name);

      } else {
        this.alertService.error(rs.error);
      }
      this.openLoading = false;
    } catch (error) {
      this.openLoading = false;;
      this.alertService.error(error);
    }

  }
}
