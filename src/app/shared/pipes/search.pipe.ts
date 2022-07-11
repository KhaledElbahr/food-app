import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Recipe[], searchText: string) {
    if (!searchText) {
      return items;
    }
    if (!items) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter((item) => {
      return item.title.toLocaleLowerCase().includes(searchText);
    });

  }
}
