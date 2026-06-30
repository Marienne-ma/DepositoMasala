import { Component, inject } from '@angular/core';
import { ShoppingListService } from '../../core/services/shopping-list-service';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from '../shopping-list-component/shopping-list-component';

@Component({
  selector: 'app-add-item-component',
  imports: [FormsModule, ShoppingListComponent],
  templateUrl: './add-item-component.html',
  styleUrl: './add-item-component.css',
})
export class AddItemComponent {

  shoppingListService = inject(ShoppingListService)
  newString: string = ""

  addServiceList() : void {

    this.shoppingListService.addItem(this.newString)
    this.newString = "";

  }



}
