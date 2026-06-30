import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-exercise2-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-exercise2-component.html',
  styleUrl: './form-exercise2-component.css',
})
export class FormExercise2Component {


  dataForm = new FormGroup({
  oggetto: new FormControl('', Validators.required),
  messaggio: new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]),
  urgenza: new FormControl('', Validators.required

  )
});

options: string[] = ["bassa", "media", "alta"];

submitted: boolean = false
onSubmit(): void {
  if(this.dataForm.valid){
    this.submitted = true
    console.log(this.dataForm.value)
  }
}
}
