import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from '../../../shared/models/Recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipeList: Recipe[] = [];
  category: string = 'pizza';
  constructor(private recipeService: RecipesService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes(this.category).subscribe(
      (data) => {
        this.recipeList = data.recipes;
      },
      (err) => console.log(err)
    );
  }

  ngOnDestroy(): void {
    // this.recipeService.getRecipes(this.category).unsubscribe;
  }
}
