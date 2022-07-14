import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray} from '@angular/forms';
import { Recipe } from './../../../shared/models/Recipe';
import { RecipesService } from './../../../shared/services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  createRecipeForm: FormGroup;
  pageTitle = 'Edit Recipe';
  recipe!: Recipe;
  constructor(
    public fb: FormBuilder,
    private recipeservice: RecipesService,
    private route: ActivatedRoute) {
      this.createRecipeForm = fb.group({
        title :['', [Validators.required]],
        publisher:['',[Validators.required]],
        sourceURL:['',[
          Validators.required,
          Validators.pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
        ]],
        imgURL:['',[
          Validators.required,
          Validators.pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
        ]],
        publisherURL:['',[
          Validators.required,
          Validators.pattern(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/)
        ]],
        ingredients:this.fb.array([]),
        socialRank:['',[
          Validators.required,
          Validators.pattern(/^[1-9]?[0-9]{1}$|^100$/)
        ]]
      })
    }

  get formControls() {
    return this.createRecipeForm.controls;
  }

  get ingredientsAsFormArray(): any {
    return this.createRecipeForm.get('ingredients') as FormArray;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: any) => {
        this.getRecipe(params.params.id);
      }
    );
  }

  getRecipe(id: string) {
    this.recipeservice.getRecipe(id).subscribe(
      (recipe: any) => this.displayRecipe(recipe.recipe),
      err => console.log(err)
    );
  }

  displayRecipe(recipe: Recipe): void {
    this.recipe = recipe;
    if (this.recipe.recipe_id === '') {
      this.pageTitle = 'Add Recipe';
    } else {
      this.pageTitle = 'Edit Recipe';
    }

  if(this.recipe.ingredients !== undefined) {
    this.recipe.ingredients.forEach(ingredient => {
      this.addIngredient(ingredient);
    });
  }

    this.createRecipeForm.patchValue(
      {
        title: this.recipe.title,
        publisher: this.recipe.publisher,
        sourceURL: this.recipe.source_url,
        imgURL: this.recipe.image_url,
        publisherURL: this.recipe.publisher_url,
        socialRank: this.recipe.social_rank,
      }
    );
    console.log(this.createRecipeForm.value);

  }

  ingredient(): FormGroup {
    return this.fb.group({
      ingredient: this.fb.control(''),
    });
  }

  addIngredient(ingredient = ''): void {
    if (ingredient.trim() !== '') {
      this.ingredientsAsFormArray.push(this.fb.group({
        ingredient: this.fb.control(ingredient),
      }))
    } else {
      this.ingredientsAsFormArray.push(this.ingredient());
    }
  }

  onSubmit(val: any): void {
    if (
      this.createRecipeForm.valid &&
      this.createRecipeForm.get('title')?.value.trim !== '' &&
      this.createRecipeForm.get('publisher')?.value.trim !== '' &&
      this.createRecipeForm.get('sourceURL')?.value.trim !=='' &&
      this.createRecipeForm.get('imgURL')?.value.trim !=='' &&
      this.createRecipeForm.get('publisherURL')?.value.trim !=='' &&
      this.createRecipeForm.get('socialRank')?.value.trim !=='' &&
      this.createRecipeForm.get('ingredients')?.value.trim !==''
    ) {
      console.log(val);
      this.createRecipeForm.reset();
    }
  }

}
