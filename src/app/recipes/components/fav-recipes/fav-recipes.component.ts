import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/shared/models/Recipe';
import { SearchService } from 'src/app/shared/services/search.service';
import { selectFavlist } from '../../store/recipe.selector';

@Component({
  selector: 'app-fav-recipes',
  templateUrl: './fav-recipes.component.html',
  styleUrls: ['./fav-recipes.component.scss'],
})
export class FavRecipesComponent implements OnInit {
  favlist!: Array<Recipe>;
  searchText!: string;
  constructor(private store: Store, private searchService: SearchService) {}
  ngOnInit(): void {
    this.store.select(selectFavlist).subscribe((recipes: Recipe[]) => {
      this.favlist = recipes;
    });
    this.searchService.getsearchWord().subscribe((value) => {
      this.searchText = value;
    });
  }
}
