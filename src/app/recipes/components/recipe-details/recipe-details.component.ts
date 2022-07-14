import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
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

  updateRecipe(recipeId: string) {
    this.router.navigate(['editMode', recipeId]);
  }
}
