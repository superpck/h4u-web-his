import { Injectable, Inject } from '@angular/core';
import { toPromise } from 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class MophService {

  constructor( @Inject('API_URL') private apiUrl: string,
    private http: Http,
    private authHttp: AuthHttp) { }

  getMoph(cid: any) {
    const data = {
      cid: cid,
      token: sessionStorage.getItem('token')
    };
    return new Promise((resolve, reject) => {
      this.http.post(`${this.apiUrl}/admin/search-mophid`, data)
        .map(res => res.json())
        .subscribe(d => {
          resolve(d);
        }, error => {
          reject(error);
        });
    });
  }
  getPerson(cid: any) {
    return new Promise((resolve, reject) => {
      this.authHttp.get(`${this.apiUrl}/admin/info?cid=${cid}`)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }
}
