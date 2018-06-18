import { Injectable, Inject } from '@angular/core';
// import { toPromise } from 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class HomeService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private authHttp: AuthHttp,
    private http: Http
  ) { }


  async getRequestService(status = 'all', hcode) {
    const rs: any = await this.http.post(`http://203.157.102.103:443/api/phr/v1/service/hospital/request`,
      {
        hcode: '10957',
        status: status
      }).toPromise();
    return rs.json();
  }

  async getRequestVaccine(status = 'all', hcode) {
    const rs: any = await this.http.post(`http://203.157.102.103:443/api/phr/v1/vaccines/hospital/request`,
      {
        hcode: '10957',
        status: status
      }).toPromise();
    return rs.json();
  }

  async getService(hn, dateServe, requestId, registerId) {
    const url = `${this.apiUrl}/services/view/${hn}/${dateServe}/${requestId}/${registerId}`;
    const rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }

  async getVaccine(hcode, hn) {
    const url = `${this.apiUrl}/vaccines/view/${hcode}/${hn}`;
    const rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }

  async sendService(data) {
    const url = `http://203.157.102.103:443/api/phr/v1/service/hospital`;
    const rs: any = await this.http.post(url, { service: data }).toPromise();
    return rs.json();
  }

  async noData(requestId) {
    const url = `http://203.157.102.103:443/api/phr/v1/service/hospital/nodata`;
    const rs: any = await this.http.post(url, { request_id: requestId }).toPromise();
    return rs.json();
  }

  async sendVaccine(data) {
    const url = `http://203.157.102.103:443/api/phr/v1/vaccines/hospital`;
    const rs: any = await this.http.post(url, { service: data }).toPromise();
    return rs.json();
  }

  async disApprove(requestId) {
    const url = `http://203.157.102.103:443/api/phr/v1/service/hospital/disapprove`;
    const rs: any = await this.http.post(url, { request_id: requestId }).toPromise();
    return rs.json();
  }

  async disApproveVaccine(requestId) {
    const url = `http://203.157.102.103:443/api/phr/v1/vaccines/hospital/disapprove`;
    const rs: any = await this.http.post(url, { request_id: requestId }).toPromise();
    return rs.json();
  }
}
