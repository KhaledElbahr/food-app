import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/shared/models/Recipe';
import { addToFav, removeFromFav } from '../../store/recipe.action';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  isLiked: boolean = false;
  @Input() recipe!: Recipe;
  constructor(private store: Store) {}

  ngOnInit(): void {}
  addToFavlist(recipe: Recipe) {
    if (!this.isLiked) {
      this.store.dispatch(addToFav({ recipe }));
      this.isLiked = true;
    } else {
      this.store.dispatch(removeFromFav(recipe));
      this.isLiked = false;
    }
  }
}
