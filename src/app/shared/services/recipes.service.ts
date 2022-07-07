import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  RecipeURL = 'https://forkify-api.herokuapp.com/api';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getRecipes(category: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.RecipeURL}/search?q=${category}`, { headers: this.headers }).pipe(
      map((data: Recipe[]) => {
        console.log(data);
        return data;
      }),
      // catchError(this.handleError)
    );
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.RecipeURL}/get?rId=${id}`, { headers: this.headers }).pipe(
      map((data: Recipe) => {
        console.log(data);
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
