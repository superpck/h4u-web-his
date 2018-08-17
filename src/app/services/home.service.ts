import { Injectable, Inject } from '@angular/core';
// import { toPromise } from 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class HomeService {
  public jwtHelper: JwtHelper = new JwtHelper();
  hcode: any;
  constructor(
    @Inject('API_H4U_URL') private h4uUrl: string,
    @Inject('API_URL') private apiUrl: string,
    private authHttp: AuthHttp,
    private http: Http
  ) {
    const token = sessionStorage.getItem('token');
    const decodedToken = this.jwtHelper.decodeToken(token);
    // const accessRight = decodedToken.accessRight;
    this.hcode = decodedToken.hospcode;
  }


  async getRequestService(status = 'all', hcode) {
    const rs: any = await this.authHttp.get(`${this.h4uUrl}/requests?status=${status}`).toPromise();
    return rs.json();
  }

  // async getRequestVaccine(status = 'all', hcode) {
  //   const rs: any = await this.http.post(`${this.h4uUrl}/vaccines/hospital/request`,
  //     {
  //       hcode: this.hcode,
  //       status: status
  //     }).toPromise();
  //   return rs.json();
  // }

  async getService(hn, dateServe, requestId, registerId) {
    const url = `${this.apiUrl}/services/view/${hn}/${dateServe}/${requestId}/${registerId}`;
    const rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }

  // async getVaccine(hcode, hn) {
  //   const url = `${this.apiUrl}/vaccines/view/${hcode}/${hn}`;
  //   const rs: any = await this.http.get(url).toPromise();
  //   return rs.json();
  // }

  async sendService(data) {
    const url = `${this.h4uUrl}/services`;
    const rs: any = await this.authHttp.post(url, { services: data }).toPromise();
    return rs.json();
  }

  async noData(requestId) {
    const url = `${this.h4uUrl}/services/nodata`;
    const rs: any = await this.authHttp.post(url, { request_id: requestId }).toPromise();
    return rs.json();
  }

  // async sendVaccine(data) {
  //   const url = `${this.h4uUrl}/vaccines/hospital`;
  //   const rs: any = await this.http.post(url, { service: data }).toPromise();
  //   return rs.json();
  // }

  async disApprove(requestId) {
    const url = `${this.h4uUrl}/services/cancel`;
    const rs: any = await this.authHttp.post(url, { request_id: requestId }).toPromise();
    return rs.json();
  }

  // async disApproveVaccine(requestId) {
  //   const url = `${this.h4uUrl}/vaccines/hospital/disapprove`;
  //   const rs: any = await this.http.post(url, { request_id: requestId }).toPromise();
  //   return rs.json();
  // }
}
