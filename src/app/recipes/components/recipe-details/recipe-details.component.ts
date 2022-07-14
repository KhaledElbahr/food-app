import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/shared/models/Recipe';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  providers: [MessageService]
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;
  param: any;
  id!: string;
  waitingFlag = true;
  noContent: boolean=false;
  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
     private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'a7aaaaaaaaaaaaa'});

    this.activatedRoute.paramMap.subscribe((params) => {
      this.param = params;
      this.id = this.param.params.id;
      this.recipeService.getRecipe(this.id).subscribe(
        (data) => {
          this.recipe = data.recipe;
          this.waitingFlag = false;
        },
        (err) => {console.log(err)
          this.noContent=true

          this.messageService.add({severity:'error', summary: 'Error', detail: err});
          this.waitingFlag = false;
        }
      );
    });
  }
}
