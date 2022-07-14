import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TopRanked } from 'src/app/shared/models/Recipe';
import { RecipesService } from 'src/app/shared/services/recipes.service';
import { SearchService } from 'src/app/shared/services/search.service';


@Component({
  selector: 'app-top-ranked',
  templateUrl: './top-ranked.component.html',
  styleUrls: ['./top-ranked.component.scss']
})
export class TopRankedComponent implements OnInit {
  searchText!: string;
  topRanked : TopRanked = {
    pizza: [],
    salad: [],
    beef: []
  };
  waitingFlag = true;

  constructor(private searchService: SearchService , private recipeService : RecipesService,
    private messageService: MessageService
    ) { }
  getTopRanked (){
    for (const category in this.topRanked){
      this.recipeService.getRecipes(category).subscribe(
        (data) => {
          this.topRanked[category as keyof typeof this.topRanked]=data.recipes.slice(3,6);
          this.waitingFlag = false;

        },
        (err) => {
          this.messageService.add({severity:'error', summary: 'Error', detail: err});
          this.waitingFlag = false;
        }
      );
    }
  }

  ngOnInit(): void {
    this.searchService.getsearchWord().subscribe((value) => {
      this.searchText = value;
    });
    this.getTopRanked()
  }

}
