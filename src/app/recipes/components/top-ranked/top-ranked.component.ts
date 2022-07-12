import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';


@Component({
  selector: 'app-top-ranked',
  templateUrl: './top-ranked.component.html',
  styleUrls: ['./top-ranked.component.scss']
})
export class TopRankedComponent implements OnInit {
  searchText!: string;
  recipeList: any[] = [
    { "publisher": "All Recipes", "title": "Zesty Slow Cooker Chicken Barbeque", "source_url": "http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx", "recipe_id": "34889", "image_url": "http://forkify-api.herokuapp.com/images/4515542dbb.jpg", "social_rank": 100, "publisher_url": "http://allrecipes.com" },

    {
      "publisher": "The Pioneer Woman",
      "title": "Asian Noodle Salad",
      "source_url": "http://thepioneerwoman.com/cooking/2008/03/my_most_favorite_salad_ever_ever_ever_ever/",
      "recipe_id": "47334",
      "image_url": "http://forkify-api.herokuapp.com/images/AsianNoodleSalad1754.jpg",
      "social_rank": 100,
      "publisher_url": "http://thepioneerwoman.com"
    },
    {
      "publisher": "Two Peas and Their Pod",
      "title": "Quinoa Salad with Asparagus, Peas, Avocados & Lemon Basil Dressing",
      "source_url": "http://www.twopeasandtheirpod.com/quinoa-salad-with-asparagus-peas-avocado-lemon-basil-dressing/",
      "recipe_id": "5cc4a8",
      "image_url": "http://forkify-api.herokuapp.com/images/SpringQuinoaSalad3ba71.jpg",
      "social_rank": 99.99999999993314,
      "publisher_url": "http://www.twopeasandtheirpod.com"
    },
    {
      "publisher": "The Pioneer Woman",
      "title": "Layered Salad",
      "source_url": "http://thepioneerwoman.com/cooking/2010/08/layered-salad/",
      "recipe_id": "47106",
      "image_url": "http://forkify-api.herokuapp.com/images/4940301746_c16a4e7edf_o72c2.jpg",
      "social_rank": 99.99999999969766,
      "publisher_url": "http://thepioneerwoman.com"
    }]

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getsearchWord().subscribe((value) => {
      this.searchText = value;
    });
  }

}
