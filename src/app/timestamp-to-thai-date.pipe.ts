import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'timestampToThaiDate'
})
export class TimestampToThaiDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    moment.locale('th');
    if (moment(value, 'x').isValid()) {
      const thaiDate = `${moment(value, 'x').format('DD MMM')} ${moment(value, 'x').get('year') + 543}`;
      return thaiDate;
    } else {
      return '-';
    }
  }

}
