import { Pipe, PipeTransform } from '@angular/core';

// import { Legajo } from './legajo/Legajo';

@Pipe({
    name: 'filterPipe',
    pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: any) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {Book} book The book to compare to the filter.
   * @param {Book} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(heystack: any, filter: any): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
            // console.log(legajo[field])
          if (heystack[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
            if (heystack[field].toString().toLowerCase().indexOf(filter[field].toString().toLowerCase()) === -1) {
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