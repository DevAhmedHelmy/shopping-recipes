import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'testing recipe',
      'this is s simple test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
    ),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}
  onSelected(selectedRecipe: Recipe) {
    this.recipeSelected.emit(selectedRecipe);
  }
}
