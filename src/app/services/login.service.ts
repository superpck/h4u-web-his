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
    const data = {
      username: username,
      password: password
    };
    console.log('Login');    
    const rs: any = await this.http.post(`http://203.157.103.123/h4u/api/login/smh-login`, data).toPromise();
    return rs.json();
  }

}
