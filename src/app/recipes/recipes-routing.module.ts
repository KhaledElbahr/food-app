import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { FavRecipesComponent } from './components/fav-recipes/fav-recipes.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { AuthGuard } from './../auth/services/auth.guard';

const routes: Routes = [
  { path: 'recipes/:category', canActivate: [AuthGuard], component: RecipesListComponent },
  { path: 'recipe/:id', canActivate: [AuthGuard], component: RecipeDetailsComponent },
  { path: 'editMode/:id', canActivate: [AuthGuard], component: CreateRecipeComponent },
  { path: 'fav-recipes', canActivate: [AuthGuard], component: FavRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule { }
