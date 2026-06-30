import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-traffic-light-component',
  imports: [],
  templateUrl: './traffic-light-component.html',
  styleUrl: './traffic-light-component.css',
})
export class TrafficLightComponent {
  color = signal('red');

  colors: string[] = ['green', 'yellow', 'red'];

  count: number = 0;

  avanza(): void {

    this.color.update((val) => this.colors[this.count]);

    
    if (this.count < 2) {
      this.count++;
    } else {
      this.count = 0;
    }
  }


  
}
