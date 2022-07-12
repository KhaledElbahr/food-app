import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/shared/models/Recipe';
import { changeLike, removeFromFav } from '../../store/recipe.action';

@Component({
  selector: 'app-fav-item',
  templateUrl: './fav-item.component.html',
  styleUrls: ['./fav-item.component.scss'],
})
export class FavItemComponent implements OnInit {
  isLiked: boolean = true;
  @Input() recipe!: Recipe;
  constructor(private store: Store) {}

  ngOnInit(): void {}
  removeFromFavlist(recipe_id: string) {
    this.store.dispatch(removeFromFav({ recipe_id }));
  }
  Liked() {
    this.store.dispatch(changeLike({ recipe_id: this.recipe.recipe_id }));
  }
}
