import { Component } from '@angular/core';
import { ChildProductCardComponent } from '../child-product-card-component/child-product-card-component';

@Component({
  selector: 'app-product-list-component',
  imports: [ChildProductCardComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {

  
  products: {
    name: string;
    price: number;
    available: boolean;}[] =
  [
    { name: 'MATITA', price: 0.50, available: true },
    { name: 'ASTUCCIO', price: 10, available: true },
     { name: 'QUADERNO', price: 2, available: false }
  ];


}
