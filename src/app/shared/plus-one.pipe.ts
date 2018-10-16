import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusOne'
})
export class PlusOnePipe implements PipeTransform {

  transform(value: any, args?: any): any {
	  
    return value + 1;
  };
};
