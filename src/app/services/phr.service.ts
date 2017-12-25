import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class PhrService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  getPerson(cid) {
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

  getDrugAllergy(cid) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/allergy?cid=${cid}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getNcdScreen(cid) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/ncdscreen?cid=${cid}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getLabFu(cid) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/labfu?cid=${cid}`)
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

  getEpi(cid) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/epi?cid=${cid}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getAnc(cid) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/anc?cid=${cid}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  getLastDrugs(cid) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/admin/last-drugs?cid=${cid}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
