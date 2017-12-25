import { Injectable } from '@angular/core';

import { default as swal, SweetAlertType, SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AlertService {

  constructor() { }

  error(text: any = 'เกิดข้อผิดพลาด') {

    const option: SweetAlertOptions = {
      text: text,
      type: 'error',
      showConfirmButton: false,
      timer: 1500
    };
    swal(option);

  }

  success(title = 'ดำเนินการเสร็จเรียบร้อย', text = '') {

    const option: SweetAlertOptions = {
      title: title,
      text: text,
      timer: 1000,
      type: 'success',
      confirmButtonText: 'ตกลง'
    };
    swal(option)
      .then(
      function () { },
      // handling the promise rejection
      function (dismiss) {
        if (dismiss === 'timer') {}
      }
      )

  }

  serverError() {

    const option: SweetAlertOptions = {
      text: 'เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์',
      type: 'error',
      showConfirmButton: false,
      timer: 1500
    };
    swal(option);

  }

  confirm(text = 'คุณต้องการดำเนินการนี้ ใช่หรือไม่?', ) {
    const option: SweetAlertOptions = {
      title: '',
      text: text,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่, ดำเนินการ!',
      cancelButtonText: 'ยกเลิก'
    };
    return swal(option);
  }
}
