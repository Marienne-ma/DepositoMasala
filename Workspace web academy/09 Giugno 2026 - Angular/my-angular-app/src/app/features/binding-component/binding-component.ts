import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-binding-component',
  imports: [FormsModule],
  templateUrl: './binding-component.html',
  styleUrl: './binding-component.css',
})
export class BindingComponent {
  //Interpolation
  username: string = "Marco"
  // Property Binding
  imageUrl: string = "https://thumbs.dreamstime.com/b/angular-logo-editorial-illustrative-white-background-angular-logo-editorial-illustrative-white-background-eps-download-208329119.jpg"
  imageWidth: number = 100
  imageHeight: number = 150
  // Event Binding
  currentMsg: string = "Buongiorno"

  messages: string[] = ["Buongiorno", "Buon pomeriggio", "Buonasera", "Buonanotte"]
  index: number = 0

  saluta(): void{
    this.index += 1
    if(
      this.index >= this.messages.length
    ) this.index = 0

    this.currentMsg = this.messages[this.index]
  }

  resetNome(): void{
    this.username = "----"
  }
}
