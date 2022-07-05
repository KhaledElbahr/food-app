import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipeList: any[] = [
    {"publisher": "All Recipes","title": "Zesty Slow Cooker Chicken Barbeque","source_url": "http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx","recipe_id": "34889","image_url": "http://forkify-api.herokuapp.com/images/4515542dbb.jpg","social_rank": 100,"publisher_url": "http://allrecipes.com"},

    {"publisher": "All Recipes","title": "Zesty Slow Cooker Chicken Barbeque","source_url": "http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx","recipe_id": "34889","image_url": "http://forkify-api.herokuapp.com/images/4515542dbb.jpg","social_rank": 100,"publisher_url": "http://allrecipes.com"},

    {"publisher": "All Recipes","title": "Zesty Slow Cooker Chicken Barbeque","source_url": "http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx","recipe_id": "34889","image_url": "http://forkify-api.herokuapp.com/images/4515542dbb.jpg","social_rank": 100,"publisher_url": "http://allrecipes.com"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
