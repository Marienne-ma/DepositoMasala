import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  imports: [],
  templateUrl: './edit-component.html',
  styleUrl: './edit-component.css',
})
export class EditComponent {

  savedValue= signal<string>("")
  currentValue= signal<string>("")

  onInput(event: Event):void {

    const target = event.target as HTMLInputElement
    this.currentValue.set(target?.value ?? "")

  }

  save():void {
    this.savedValue.set(this.currentValue())
  }

  hasUnsavedChanges():boolean {
    return this.savedValue() !== this.currentValue()
  }
}
