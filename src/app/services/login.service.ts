import { Injectable, Inject } from '@angular/core';
import { toPromise } from 'rxjs/operator/toPromise';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: Http
  ) { }
  
  async doLogin(username: any, password: any) {
    let data = {
      username: username,
      password: password
    }
    let rs: any = await this.http.post(`${this.apiUrl}/users/smh-login`, data).toPromise();
    return rs.json();
  }

}
