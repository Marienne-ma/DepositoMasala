import { Component } from '@angular/core';
import { FormsModule, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-form-exercise-component',
  imports: [FormsModule],
  templateUrl: './form-exercise-component.html',
  styleUrl: './form-exercise-component.css',
})
export class FormExerciseComponent {

  data= {
    nome:"",
    email:"",
    eta:0
  }


  onSubmit(): void {

    console.log(this.data);
  }


}
