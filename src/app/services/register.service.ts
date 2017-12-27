import { Injectable, Inject } from '@angular/core';
import { toPromise } from 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class RegisterService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private authHttp: AuthHttp
  ) { }

  async getRegister() {
    let rs: any = await this.authHttp.get(`${this.apiUrl}/admin/register`).toPromise();
    return rs.json();
  }

  async deActive(id: any) {
    let rs: any = await this.authHttp.put(`${this.apiUrl}/admin/register/deactive`, {id: id}).toPromise();
    return rs.json();
  }

  async setActive(id: any) {
    let rs: any = await this.authHttp.put(`${this.apiUrl}/admin/register/setactive`, {id: id}).toPromise();
    return rs.json();
  }

  async getUnRegister() {
    let rs: any = await this.authHttp.get(`${this.apiUrl}/admin/unregister`).toPromise();
    return rs.json();
  }

  async searchMophId(cid: any) {
    let rs: any = await this.authHttp.post(`${this.apiUrl}/admin/search-mophid`, { cid: cid }).toPromise();
    return rs.json();
  }

  async saveMophId(cid: any, mophid: any, isActive: any) {
    let rs: any = await this.authHttp.post(`${this.apiUrl}/admin/save-mophid`, {
      cid: cid,
      mophid: mophid,
      isActive: isActive
    }).toPromise();
    return rs.json();
  }

}
