import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { TopRankedComponent } from './components/top-ranked/top-ranked.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
// NGPrime
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from "primeng/divider";
import { TagModule } from 'primeng/tag';
import {CardModule} from 'primeng/card';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FavRecipesComponent } from './components/fav-recipes/fav-recipes.component';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { FavItemComponent } from './components/fav-item/fav-item.component';


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
    ButtonModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    DividerModule,
    TagModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule
  ],
  exports: [
    TopRankedComponent,
    RecipesListComponent,
    ReactiveFormsModule,
    RecipeDetailsComponent,
    RecipeItemComponent,
    CreateRecipeComponent,
    FavRecipesComponent,
  ],
})
export class RecipesModule { }
