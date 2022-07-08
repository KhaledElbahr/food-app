import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/shared/models/Recipe';
import { removeFromFav } from '../../store/recipe.action';
import { selectFavlist } from '../../store/recipe.selector';

@Component({
  selector: 'app-fav-recipes',
  templateUrl: './fav-recipes.component.html',
  styleUrls: ['./fav-recipes.component.scss'],
})
export class FavRecipesComponent implements OnInit {
  isLiked: boolean = true;
  @Input() recipe!: Recipe;
  favlist!: Array<Recipe>;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.select(selectFavlist).subscribe((recipes: Recipe[]) => {
      this.favlist = recipes;
    });
  }
  removeFromFavlist(recipe_id: string) {
    this.store.dispatch(removeFromFav({ recipe_id }));
  }
  Liked() {
    this.isLiked = !this.isLiked;
  }
}
