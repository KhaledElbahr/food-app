import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/shared/models/Recipe';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;
  param: any;
  id!: string;
  waitingFlag = true;
  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.param = params;
      this.id = this.param.params.id;
      this.recipeService.getRecipe(this.id).subscribe(
        (data) => {
          this.recipe = data.recipe;
          this.waitingFlag = false;
        },
        (err) => console.log(err)
      );
    });
  }
}
