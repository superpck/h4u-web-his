import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class PhrService {

  constructor(
    @Inject('API_URL') private url: string,
    private authHttp: AuthHttp
  ) { }

  getPerson() {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.url}/phr/info`)
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
      this.authHttp.get(`${this.url}/phr/allergy`)
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
      this.authHttp.get(`${this.url}/phr/ncdscreen`)
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
      this.authHttp.get(`${this.url}/phr/labfu`)
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
      this.authHttp.get(`${this.url}/phr/labfu/info?hospcode=${hospcode}&pid=${pid}&seq=${seq}`)
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
      this.authHttp.get(`${this.url}/phr/epi`)
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
      this.authHttp.get(`${this.url}/phr/anc`)
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
      this.authHttp.get(`${this.url}/phr/last-drugs`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

}
