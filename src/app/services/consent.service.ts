import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ConsentService {

  constructor(
    private http: Http,
    @Inject('API_CONSENTS_URL') private h4uConsentsUrl: string,
  ) { }


  async getLogs(hcode) {
    const url = `${this.h4uConsentsUrl}/consent/log?hcode=${hcode}`;
    const rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }

  async search(cid, hcode, searchBy) {
    const url = `${this.h4uConsentsUrl}/consent`;
    const rs: any = await this.http.post(url,
      {
        cid: cid,
        hcode: hcode,
        searchBy: searchBy
      }).toPromise();
    return rs.json();
  }

  async getConsent(cid) {
    const url = `${this.h4uConsentsUrl}/consent/${cid}`;
    const rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }
}
