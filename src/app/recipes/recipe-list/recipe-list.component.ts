import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.agoramedia.com/EHBlogImages/margaret-omalley-the-lunch-lady/' +
      '2015/04/The-Vegetarian-Food-Lab-Avocado-toasts-400.jpg.jpg'),
    new Recipe('Another Test Recipe', 'This is a another test', 'https://images.agoramedia.com/EHBlogImages/margaret-omalley-the-lunch-lady/' +
      '2015/04/The-Vegetarian-Food-Lab-Avocado-toasts-400.jpg.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
