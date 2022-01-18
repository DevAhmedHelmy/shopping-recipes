import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from '../../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdd = new EventEmitter<Ingredient>();
  constructor() {}
  @ViewChild('inputName') inputName!: ElementRef;
  @ViewChild('inputAmount') inputAmount!: ElementRef;
  ngOnInit(): void {}
  onSubmit() {
    const newAdd = new Ingredient(
      this.inputName.nativeElement.value,
      this.inputAmount.nativeElement.value
    );
    this.ingredientAdd.emit(newAdd);
  }
}
