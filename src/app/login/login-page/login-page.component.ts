import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit {

  username: any;
  password: any;
  errorMessage: any;
  isError: boolean = false;
  logging: boolean = false;

  constructor(
    private loginService: LoginService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  async doLogin() {
    if (this.username && this.password) {
      this.isError = false;
      this.logging = true;
      try {
        let rs: any = await this.loginService.doLogin(this.username, this.password);
        if (rs.ok) {
          sessionStorage.setItem("token", rs.token);
          this.route.navigate(['/admin']);
        } else {
          this.isError = true;
          this.errorMessage = rs.error;
        }

        this.logging = false;
      } catch (error) {
        this.logging = false;
        this.isError = true;
        this.errorMessage = 'เกิดข้อผิดพลาดในการเชื่อมต่อ';
      }
    } else {
      this.isError = true;
      this.errorMessage = 'กรุณาระบุชื่อผู้ใช้งานและรหัสผ่าน';
    }
  }

  enterLogin(event: any) {
    if (event.keyCode === 13) {
      this.doLogin();
    }
  }

}
