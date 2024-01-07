import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase().trim(); // Remove whitespace from the beginning and end
  
    const filteredItems = items.filter(item =>
      this.userContainsFilterText(item,searchText)
    );
  
    return filteredItems;
  }
  
  private userContainsFilterText = (item: any, filterText: string): boolean => {
    try {
      if(item.title !== undefined && item.title !== null || item.name !== undefined && item.name !== null) {
        filterText = filterText.toLowerCase();
        const filterTerms = filterText.split(' ');
        
        for (let term of filterTerms) {
          let hasFilterTerm = false;

          if(item.title && item.title.toLowerCase().includes(term) ) {
            //console.log(item);
            return true; 
          }

          if(item.name && item?.name.toLowerCase().includes(term)){
            //console.log(item);
            return true;
          }

          if (!hasFilterTerm) {
            return false; // No match found for the current term
          }        
        }
        return true;
      } else{
        throw new Error(`Error: Objekt nima podanega parametra za iskanje. `)
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

}
