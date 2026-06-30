import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-price-component',
  imports: [],
  templateUrl: './price-component.html',
  styleUrl: './price-component.css',
})
export class PriceComponent {

  netPrice= signal(100)

  vat = signal(22)

  price = computed(() => {

    return this.netPrice() * (1 + this.vat() /100)
  })


  updatePrice(event: Event) : void {
  const input = event.target as HTMLInputElement
    this.netPrice.set(Number(input.value))
  }



}
