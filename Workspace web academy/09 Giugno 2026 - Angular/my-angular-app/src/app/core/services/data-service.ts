import { Injectable, Service } from '@angular/core';

// @Service()
@Injectable({
  providedIn: "root",
})
export class DataService {
  private items: string[] = ["Mela","Pera", "Formaggio"]

  addItem(item: string): void {
    this.items.push(item)
  }

  getItems() : string[] {
    return [...this.items]
  }

  updateAllList(newList: string[]) : void {

    this.items= newList
  }
}
