export interface Recipe {
  publisher: string;
  ingredients?: string[];
  title: string;
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;
  isLike?: boolean;
}

export interface SingleRecipe {
  recipe: Recipe;
}

export interface RecipeList {
  count: number;
  recipes: Recipe[];
}
