import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-star-rating-component',
  imports: [],
  templateUrl: './star-rating-component.html',
  styleUrl: './star-rating-component.css',
})
export class StarRatingComponent {

  maxRating = input<number>(5)

  maxLength = Array.from({ length: this.maxRating()});

  ratingSelect = output<number>()

  setRating(num: number): void {
    this.ratingSelect.emit(num)
  }


}
