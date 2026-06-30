import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {

  items = signal<string[]>([])

  getItems() : string[] {
    return [...this.items()]
  }

  addItem(name: string) : void {
    this.items.update(items => [...items, name])
  }


  removeItem(index: number) : void {
     this.items.update(items =>
    items.filter((a, aIndex) => aIndex !== index)
  );
  }
}
