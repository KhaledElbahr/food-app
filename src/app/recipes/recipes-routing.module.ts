import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { TopRankedComponent } from './components/top-ranked/top-ranked.component';

const routes: Routes = [
    { path: 'beef',  component: RecipesListComponent },
    { path: 'salad', component: RecipesListComponent },
    { path: 'pizza', component: RecipesListComponent },
    { path: 'recipe/:id', component: RecipeDetailsComponent },
    { path: 'recipes/top-rank', component: TopRankedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
