import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { RecipeList,SingleRecipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  RecipeURL = 'https://forkify-api.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  getRecipes(category: string): Observable<RecipeList> {
    return this.http
      .get<RecipeList>(`${this.RecipeURL}/search?q=${category}`)
      .pipe(
        map((data: RecipeList) => {
          return data;
        }),
        catchError(this.handleError)
      );
  }

  getRecipe(id: string): Observable<SingleRecipe> {
    return this.http
      .get<SingleRecipe>(`${this.RecipeURL}/get?rId=${id}`)
      .pipe(
        map((data: SingleRecipe) => {
          return data;
        }),
        catchError(this.handleError)
      )
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.error}`;
    } else {
      errorMessage = `Backend returned an unsuccessful response!!! ${err.status} - ${err.statusText}`;
    }
    return throwError(errorMessage);
  }
}
