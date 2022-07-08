import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  constructor(private router: Router) {}
  openRecipeDetails(recipeId: string) {
    this.router.navigate(['recipe', recipeId]);
  }
}
