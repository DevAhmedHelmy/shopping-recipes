import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('for testing1', 10),
    new Ingredient('for testing2', 20),
    new Ingredient('for testing3', 30),
    new Ingredient('for testing4', 40),
    new Ingredient('for testing5', 50),
    new Ingredient('for testing6', 60),
  ];

  constructor() {}

  ngOnInit(): void {}
}
