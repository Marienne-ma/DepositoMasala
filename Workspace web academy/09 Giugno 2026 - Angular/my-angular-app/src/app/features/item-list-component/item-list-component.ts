import { Component, inject } from '@angular/core';
import { DataService } from '../../core/services/data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-list-component',
  imports: [FormsModule],
  templateUrl: './item-list-component.html',
  styleUrl: './item-list-component.css',
})
export class ItemListComponent {

 dataService = inject(DataService) //new DataService

  items: string[] = this.dataService.getItems()

  itemToAdd: string = ""

  addItem():void {
    this.items.push(this.itemToAdd)
  }

  updateServiceList() : void {
    this.dataService.updateAllList(this.items)

  }
}
