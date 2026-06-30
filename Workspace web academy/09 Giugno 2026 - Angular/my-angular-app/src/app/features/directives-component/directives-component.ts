import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from '../customDirective/highlight-directive';


@Component({
  selector: 'app-directives-component',
  imports: [FormsModule, NgClass, NgStyle, HighlightDirective],
  templateUrl: './directives-component.html',
  styleUrl: './directives-component.css',
})
export class DirectivesComponent {
  isVisible: boolean = true

  userLevel: number = 1

  frameworks: string[] = ["Angular", "React", "Vue.js", "Three.js"]

  favFramework: string = "Angular"

  showList: boolean = true
  incrementLevel(): void {
    if (this.userLevel < 4) {
this.userLevel++
    } else {
      this.userLevel = 1
    }
  }
}
