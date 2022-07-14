import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Recipe } from 'src/app/shared/models/Recipe';
import { addToFav, removeFromFav } from '../../store/recipe.action';
import { selectFavlist } from '../../store/recipe.selector';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  isLiked: boolean = false;
  @Input() recipe!: Recipe;
  favlist!: Array<Recipe>;

  constructor(private router: Router, private store: Store) {}

  openRecipeDetails(recipeId: string) {
    this.router.navigate(['recipe', recipeId]);
  }

  addToFavlist(recipe: Recipe) {
    if (!this.isLiked) {
      this.store.dispatch(addToFav({ recipe }));
      this.isLiked = true;
    } else {
      this.store.dispatch(removeFromFav({ recipe_id: recipe.recipe_id }));
      this.isLiked = false;
    }
  }

  ngOnInit(): void {
    this.store.select(selectFavlist).subscribe((recipes: Recipe[]) => {
      this.favlist = recipes;
    });

    const faved = this.favlist.find((e) => {
      return e.recipe_id == this.recipe.recipe_id;
    });
    if (faved) {
      this.isLiked = true;
    }
  }
}
