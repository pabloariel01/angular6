import { Pipe, PipeTransform } from '@angular/core';

import { Legajo } from './legajo/Legajo';

@Pipe({
    name: 'legajoPipe',
    pure: false
})
export class legajoFilterPipe implements PipeTransform {
  transform(items: Legajo[], filter: Legajo): Legajo[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Legajo) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Book} book The book to compare to the filter.
   * @param {Book} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(legajo: Legajo, filter: Legajo): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
            // console.log(legajo[field])
          if (legajo[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
            if (legajo[field].toString().toLowerCase().indexOf(filter[field].toString().toLowerCase()) === -1) {
                return false;
            }
        //   if (legajo[field] !== filter[field]) {
        //     return false;
        //   }
        }
      }
    }
    return true;
  }
}