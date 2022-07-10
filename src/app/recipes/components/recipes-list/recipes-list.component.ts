import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { Recipe } from '../../../shared/models/Recipe';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {

  recipeList!: Recipe[];
  category : string="" ;
  param:any ;
  waitingFlag = true ;

  constructor(private recipeService: RecipesService , private activatedRoute :ActivatedRoute ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.param = paramMap
      this.category = this.param.params.category;
      this.recipeService.getRecipes(this.category).subscribe(
        (data) => {this.recipeList = data.recipes; this.waitingFlag = false; console.log(this.recipeList);
        },
        (err) => console.log(err)
        );
    });

  }

}
