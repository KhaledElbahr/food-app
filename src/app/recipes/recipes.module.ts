import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { TopRankedComponent } from './components/top-ranked/top-ranked.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
// NGPrime
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import {CardModule} from 'primeng/card';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TopRankedComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    CreateRecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    TagModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports: [
    TopRankedComponent,
    RecipesListComponent,
    ReactiveFormsModule,
    RecipeDetailsComponent,
    RecipeItemComponent,
    CreateRecipeComponent
  ]
})
export class RecipesModule { }
