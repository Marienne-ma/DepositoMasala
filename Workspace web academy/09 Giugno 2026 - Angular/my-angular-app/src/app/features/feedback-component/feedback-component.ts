import { Component, signal } from '@angular/core';
import { StarRatingComponent } from '../star-rating-component/star-rating-component';

@Component({
  selector: 'app-feedback-component',
  imports: [StarRatingComponent],
  templateUrl: './feedback-component.html',
  styleUrl: './feedback-component.css',
})
export class FeedbackComponent {

  ratingSignal = signal<number>(0)

  onRatingChangeSignal(newNumber: number) : void {
    this.ratingSignal.set(newNumber)
  }
}
