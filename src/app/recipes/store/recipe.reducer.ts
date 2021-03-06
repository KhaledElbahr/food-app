import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../../shared/models/Recipe';
import { addToFav, changeLike, removeFromFav } from './recipe.action';

export const initialState: Array<Recipe> = [];

export const favlistReducer = createReducer(
  initialState,
  on(addToFav, (state, { recipe }) => {
    let flag = false;
    state.forEach((e) => {
      if (e.recipe_id == recipe.recipe_id) {
        flag = true;
      }
    });

    if (!flag) {
      return [...state, recipe];
    }
    return state;
  }),
  on(removeFromFav, (state, { recipe_id }) =>
    state.filter((e) => e.recipe_id !== recipe_id)
  ),
  on(changeLike, (state, { recipe_id }) => {
    return state.map((e) => {
      if (e.recipe_id == recipe_id) {
        return {
          ...e,
          isLike: !e.isLike,
        };
      } else {
        return {
          ...e,
        };
      }
    });
  })
);
