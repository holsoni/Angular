import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursPipe'
})
export class HoursPipePipe implements PipeTransform {

  transform(value: number): string {
    let b = '';
    let m = '';
    let k = '';
    let result = '';
    if (value / 1000000000 >=1){
        b = Math.floor(value/100000000) + "B ";
        result += b;
        value %= 1000000000;
    }
    if (value / 1000000 >=1){
      m = Math.floor(value/1000000) + "M ";
      result += m;
      value %=1000000;
    }
    if (value / 10000 >=1){
      k = Math.floor(value/1000) + "K ";
      result += k;
    }
    else result = value.toString();



   /* b != 0 ? result += b + ' B ' : m != 0 ? result += m + ' M ' :
      k != 0 ? result += k + + ' K ': 0;*/
    return result;
  }

}
