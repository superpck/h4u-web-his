import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  registeredUsers: any = [];
  unRegisteredUsers: any = [];
  total: number = 0;
  perPage: number = 20;
  openLoading: boolean = false;
  openRegister: boolean = false;

  cid: any;
  mophid: any;
  firstName: any;
  lastName: any;

  isLoading: boolean = false;
  isValidated: boolean = false;
  isActive: boolean = true;
  isSaving: boolean = true;
  isError: boolean = true;
  errorMessage: any;

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit() {
    this.getUnRegistered();
    this.getRegistered();
  }

  async getUnRegistered() {
    try {
      this.openLoading = true;
      let rs: any = await this.registerService.getUnRegister();
      if (rs.ok) {
        this.unRegisteredUsers = rs.rows;
      } else {

      }

      this.openLoading = false;
    } catch (error) {
      this.openLoading = false;
    }
  }

  async getRegistered() {
    try {
      this.openLoading = true;
      let rs: any = await this.registerService.getRegister();
      if (rs.ok) {
        this.registeredUsers = rs.rows;
      } else {

      }

      this.openLoading = false;
    } catch (error) {
      this.openLoading = false;
    }
  }

  async deActive(user: any) {
    if (confirm('ต้องการยกเลิกการใช้ ใช่หรือไม่?')) {
      this.openLoading = true;
      try {
        let rs: any = await this.registerService.deActive(user._id);
        if (rs.ok) {
          this.getRegistered();
        } else {
          alert("เกิดข้อผิดพลาด")
        }
        this.openLoading = false;
      } catch (error) {
        this.openLoading = false;
        alert('เกิดข้อผิดพลาด');
      }
    }
  }

  async setActive(user: any) {
    if (confirm('ต้องการเปิดการใช้ ใช่หรือไม่?')) {
      this.openLoading = true;
      try {
        let rs: any = await this.registerService.setActive(user._id);
        if (rs.ok) {
          this.getRegistered();
        } else {
          alert("เกิดข้อผิดพลาด")
        }
        this.openLoading = false;
      } catch (error) {
        this.openLoading = false;
        alert('เกิดข้อผิดพลาด');
      }
    }
  }

  async register(user: any) {
    this.clearForm();
    await this.searchMophId(user.cid);
    this.openRegister = true;
  }

  clearForm() {
    this.cid = null;
    this.mophid = null;
    this.firstName = null;
    this.lastName = null;
    this.isValidated = false;
    this.isLoading = false;
    this.isError = false;
    this.errorMessage = null;
    this.isSaving = false;
  }

  async searchMophId(cid: any) {
    this.isLoading = true;
    try {
      let rs: any = await this.registerService.searchMophId(cid);
      console.log(rs);
      if (rs.rows) {
        this.cid = rs.rows.cid;
        if (rs.rows.moph_id) {
          this.isError = false;
          this.isValidated = true;
          this.mophid = rs.rows.moph_id;
          this.firstName = rs.rows.name;
          this.lastName = rs.rows.lname;
        } else {
          this.isError = true;
          this.errorMessage = 'ผู้ป่วยรายนี้ไม่สามารถขึ้นทะเบียนได้';
        }
      } else {
        this.isError = true;
        this.errorMessage = 'เกิดข้อผิดพลาดในการเชื่อมต่อกับ Server';
      }
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      this.isError = true;
      this.errorMessage = 'เกิดข้อผิดพลาดในการเชื่อมต่อกับ Server';
      console.log(error);
    }
  }

  async saveMophId() {
    this.isSaving = true;
    try {

      if (this.cid && this.mophid) {
        let isActive = this.isActive ? 'Y' : 'N';
        let rs: any = await this.registerService.saveMophId(this.cid, this.mophid, isActive);
        if (rs.ok) {
          this.clearForm();
          this.openRegister = false;
          this.getUnRegistered();
          this.getRegistered();
        } else {
          this.isError = true;
          this.errorMessage = 'เกิดข้อผิดพลาดในการเชื่อมต่อ';
        }
      } else {
        this.isError = true;
        this.errorMessage = 'ข้อมูลไม่ครบ';
      }

      this.isSaving = false;
    } catch (error) {
      this.isSaving = false;
      console.log(error);
      this.isError = true;
      this.errorMessage = 'เกิดข้อผิดพลาดในการเชื่อมต่อ';
    }
  }


}
