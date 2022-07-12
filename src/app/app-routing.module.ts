import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: '/recipes/top-rank', pathMatch: 'full' },
  { path: 'recipes', redirectTo: '/recipes/top-rank', pathMatch: 'full' },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  // { path: 'recipes', children: [
  //   { path: 'beef',  component: RecipesListComponent },
  //   { path: 'salad', component: RecipesListComponent },
  //   { path: 'pizza', component: RecipesListComponent },
  //   { path: 'recipe/:id', component: RecipeDetailsComponent }
  // ]},
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' }
  
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
