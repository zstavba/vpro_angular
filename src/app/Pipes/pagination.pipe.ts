import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], page: any,): any {
      //console.log(value, page, ...value.slice( 12*(page-1) , 12*(page) ));
      return [ ...value.slice( 11*(page) , 11*(page+1)  )]
  }

}
