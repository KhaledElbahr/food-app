import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { TopRankedComponent } from './recipes/components/top-ranked/top-ranked.component';

const routes: Routes = [
  { path: 'auth', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: '/top-rank', pathMatch: 'full' },
  { path: 'top-rank', component: TopRankedComponent },
  { path: 'recipes', canLoad: [AuthGuard], loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
