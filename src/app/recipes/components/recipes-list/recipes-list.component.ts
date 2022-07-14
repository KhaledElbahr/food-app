import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { SearchService } from 'src/app/shared/services/search.service';
import { Recipe } from '../../../shared/models/Recipe';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  private subscriptions = new Subscription();
  favlist!: Array<Recipe>;
  recipeList!: Recipe[];
  category: string = '';
  param: any;
  waitingFlag = true;
  searchText!: string;
  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private searchService: SearchService,
    private messageService: MessageService

  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.param = paramMap;
      this.category = this.param.params.category;
      this.recipeService.getRecipes(this.category).subscribe(
        (data) => {
          this.recipeList = data.recipes;
          this.waitingFlag = false;
          console.log(this.recipeList);
        },
        (err) => {
          this.messageService.add({severity:'error', summary: 'Error', detail: err});
          this.waitingFlag = true;

        }
      );
    });
    this.subscriptions.add(
      this.searchService.getsearchWord().subscribe((value) => {
        this.searchText = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
