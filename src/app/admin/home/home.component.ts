import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  // registeredUsers: any = [];
  // unRegisteredUsers: any = [];
  // total = 0;
  // perPage = 20;
  openLoading = false;
  waiting = [];
  selected = [];
  // openRegister = false;

  // cid: any;
  // mophid: any;
  // firstName: any;
  // lastName: any;

  // isLoading = false;
  // isValidated = false;
  // isActive = true;
  // isSaving = true;
  // isError = true;
  // errorMessage: any;

  constructor(
    private homeService: HomeService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getDetailWait('wait');
  }
  changeStatus(status) {
    this.getDetailWait(status);

  }
  async getDetailWait(status) {
    try {
      this.openLoading = true;
      const rs: any = await this.homeService.getDetail(status);
      // console.log(rs);
      if (rs.ok) {
        this.waiting = rs.rows;
        console.log(this.waiting);

      }
      this.openLoading = false;
    } catch (error) {
      this.openLoading = false;
    }
  }

  approve(w) {
    this.alertService.confirm('คุณต้องการที่จะอนุมัติ ใช่หรือไม่!')
      .then(async (result) => {
        if (result.value) {
          const rs: any = await this.homeService.getService(w.hn, w.date_serve, w.request_id, w.register_id);
          if (rs.ok) {
            const data = rs.rows;
            const rsS: any = await this.homeService.sendService(data);
            console.log(rsS);

          }
        } else {
          console.log('exit');
        }
      });
  }

  disApprove(w) {
    this.alertService.confirm('คุณต้องการที่จะไม่อนุมัติ ใช่หรือไม่')
      .then(async (result) => {
        if (result.value) {
          const rs: any = await this.homeService.disApprove(w.request_id);
        } else {
          console.log('exit');
        }
      });
  }

  approveMulti() {
    this.alertService.confirm(`คุณต้องการที่จะอนุมัติ ${this.selected.length} รายการ ใช่หรือไม่!`)
      .then(async (result) => {
        if (result.value) {
          for (const w of this.selected) {
            const rs: any = await this.homeService.getService(w.hn, w.date_serve, w.request_id, w.register_id);
            if (rs.ok) {
              const rsS: any = await this.homeService.sendService(rs.rows);
              console.log(rsS);
            }
          }
        } else {
          console.log('exit');
        }
      });
  }

  disApproveMulit(w) {
    this.alertService.confirm(`คุณต้องการที่จะไม่อนุมัติ ${this.selected.length} รายการ ใช่หรือไม่`)
      .then(async (result) => {
        if (result.value) {
          const rs: any = await this.homeService.disApprove(w.request_id);
        } else {
          console.log('exit');
        }
      });
  }
}
