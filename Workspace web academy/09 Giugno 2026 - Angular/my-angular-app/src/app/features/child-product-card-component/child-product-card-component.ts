import { Component, input} from '@angular/core';

@Component({
  selector: 'app-child-product-card-component',
  imports: [],
  templateUrl: './child-product-card-component.html',
  styleUrl: './child-product-card-component.css',
})
export class ChildProductCardComponent {


  data = input<
    { name: string,
      price: number,
      available: boolean
    }
  >({
    name: "",
    price: 0,
    available: false
  })


}
