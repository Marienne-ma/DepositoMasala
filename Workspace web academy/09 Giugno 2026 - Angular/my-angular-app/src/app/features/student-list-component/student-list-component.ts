import { Component } from '@angular/core';

import { PopupDirective } from '../customDirective/popup-directive';


 interface Student {
  name: string;
  grade: number;
  present: boolean;
}

@Component({
  selector: 'app-student-list-component',
  imports: [PopupDirective],
  templateUrl: './student-list-component.html',
  styleUrl: './student-list-component.css',
})


export class StudentListComponent {

students: Student[] = [
  { name: 'Giulia', grade: 8, present: true },
  { name: 'Marco', grade: 5, present: false },
  { name: 'Sofia', grade: 10, present: true },
  { name: 'Luca', grade: 6, present: true },
  { name: 'Anna', grade: 4, present: false },

  { name: 'Davide', grade: 7, present: true },
  { name: 'Elena', grade: 9, present: true },
  { name: 'Francesco', grade: 6, present: false },
  { name: 'Martina', grade: 10, present: true },
  { name: 'Giovanni', grade: 3, present: false },

  { name: 'Chiara', grade: 8, present: true },
  { name: 'Alessandro', grade: 7, present: true },
  { name: 'Sara', grade: 5, present: false },
  { name: 'Matteo', grade: 9, present: true },
  { name: 'Valentina', grade: 6, present: true }
];
}
