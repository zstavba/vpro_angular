import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[], page: number, pageSize: number): any {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return value.slice(startIndex, endIndex);
  }

}
