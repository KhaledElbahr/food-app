import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchWord = new BehaviorSubject('');

  constructor() { }

  setSearchWord(word: string) {
    this.searchWord.next(word);
  }
  getsearchWord() {
    return this.searchWord;
  }
}
