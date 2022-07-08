import { createAction, props } from '@ngrx/store';
import { Recipe } from '../../shared/models/Recipe';

export const addToFav = createAction('addToFav', props<{ recipe: Recipe }>());
export const removeFromFav = createAction(
  'removeFromFav',
  props<{ recipe_id: string }>()
);
