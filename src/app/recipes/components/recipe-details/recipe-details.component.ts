import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/Recipe';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe ?: Recipe ;
  id: string = '47746';
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.getRecipe(this.id).subscribe(
      (data) => {
        this.recipe = data.recipe;
      },
      (err) => console.log(err)
    );
  }
}
