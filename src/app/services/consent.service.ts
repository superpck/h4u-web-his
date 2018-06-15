import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ConsentService {

  constructor(
    private http: Http
  ) { }


  async getLogs(hcode) {
    const url = `http://localhost:3002/v1/consent/log?hcode=${hcode}`;
    const rs: any = await this.http.get(url).toPromise();
    return rs.json();
  }

  async search(cid, hcode, searchBy) {
    const url = `http://localhost:3002/v1/consent`;
    const rs: any = await this.http.post(url,
      {
        cid: cid,
        hcode: hcode,
        searchBy: searchBy
      }).toPromise();
    return rs.json();
  }
}
