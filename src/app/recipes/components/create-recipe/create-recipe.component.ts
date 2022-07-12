import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormArray} from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {
  
  createRecipeForm: FormGroup
  constructor(public fb: FormBuilder) {
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

   get ingredientsAsFormArray(): any {
    console.log(this.createRecipeForm.get('ingredients'),"jjjjjjjjjjjjjjjjjj")
    return this.createRecipeForm.get('ingredients') as FormArray;
    
  }

  ingredient(): any {
    return this.fb.group({
      ingredient: this.fb.control(''),
    });
  }

  addIngredient(): void {
    this.ingredientsAsFormArray.push(this.ingredient());
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

  ngOnInit(): void {
  }

  get formControls() {
    return this.createRecipeForm.controls;
  }

}
