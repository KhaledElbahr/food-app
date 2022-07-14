import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from './../shared/shared.module';
import { SearchPipe } from '../shared/pipes/search.pipe';
// Components
import { TopRankedComponent } from './components/top-ranked/top-ranked.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { FavRecipesComponent } from './components/fav-recipes/fav-recipes.component';
import { FavItemComponent } from './components/fav-item/fav-item.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';

@NgModule({
  declarations: [
    TopRankedComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    CreateRecipeComponent,
    FavRecipesComponent,
    SearchPipe,
    FavItemComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    SharedModule,
  ],
  exports: [
    TopRankedComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    CreateRecipeComponent,
    FavRecipesComponent,
  ],
})
export class RecipesModule { }
