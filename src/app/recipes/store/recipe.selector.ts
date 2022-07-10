import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Recipe } from '../../shared/models/Recipe';

export const selectedFavlist = createFeatureSelector<Array<Recipe>>('favlist');

export const selectFavlist = createSelector(selectedFavlist, (favlist) => {
  return favlist;
});
