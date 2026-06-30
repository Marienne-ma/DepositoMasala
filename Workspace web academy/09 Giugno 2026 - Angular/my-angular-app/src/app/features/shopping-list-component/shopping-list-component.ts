import { Component, inject, signal } from '@angular/core';
import { ShoppingListService } from '../../core/services/shopping-list-service';

@Component({
  selector: 'app-shopping-list-component',
  imports: [],
  templateUrl: './shopping-list-component.html',
  styleUrl: './shopping-list-component.css',
})
export class ShoppingListComponent {

  shoppingListService = inject(ShoppingListService)

   removeServiceList(index: number) : void {
    
    this.shoppingListService.removeItem(index);

  }

}
