import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { FavRecipesComponent } from './components/fav-recipes/fav-recipes.component';
import { AuthGuard } from './../auth/services/auth.guard';

const routes: Routes = [
  { path: 'recipes/:category', component: RecipesListComponent },
  { path: 'recipe/:id', canLoad: [AuthGuard], component: RecipeDetailsComponent },
  { path: 'fav-recipes', component: FavRecipesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule { }
