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
    }
    const rs: any = await this.http.post(`${this.apiUrl}/login`, data).toPromise();
    return rs.json();
  }

}
