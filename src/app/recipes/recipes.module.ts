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
import { FavRecipesComponent } from './components/fav-recipes/fav-recipes.component';

@NgModule({
  declarations: [
    TopRankedComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    FavRecipesComponent
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
  ],
  exports: [
    TopRankedComponent,
    RecipesListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent
  ]
})
export class RecipesModule { }
