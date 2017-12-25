import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class PhrService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  getPerson(cid: any) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/info?cid=${cid}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getDrugAllergy() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/allergy`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getNcdScreen() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/ncdscreen`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getLabFu() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/labfu`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getLabFuDetail(hospcode, pid, seq) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/labfu/info?hospcode=${hospcode}&pid=${pid}&seq=${seq}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getEpi() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/epi`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getAnc() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/anc`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getLastDrugs() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/last-drugs`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
