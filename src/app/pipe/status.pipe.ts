import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusToTh'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 'wait') {
      return 'รออนุมัติ';
    } else if (value === 'approve') {
      return 'อนุมัติ';
    } else if (value === 'disapprove') {
      return 'ไม่อนุมัติ';
    } else {
      return '-';
    }

  }

}


