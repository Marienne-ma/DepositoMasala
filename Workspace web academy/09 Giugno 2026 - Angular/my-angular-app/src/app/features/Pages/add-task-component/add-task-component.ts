import { Component, inject, OnInit } from '@angular/core';
import { Task, TaskRestService } from '../../../core/services/task-rest-service';

@Component({
  selector: 'app-add-task-component',
  imports: [],
  templateUrl: './add-task-component.html',
  styleUrl: './add-task-component.css',
})
export class AddTaskComponent implements OnInit{
  private taskServ = inject(TaskRestService);

  title: string = '';
  description: string = '';

  loadedTask: Task[] = [];

  errorMsg: string = '';


  ngOnInit(): void {
      this.loadTask()
  }
  loadTask() {
    this.taskServ.getTask().subscribe({
      next: (tasks) => {
        ((this.loadedTask = tasks), (this.errorMsg = ''));
      },
      error: (err) => (this.errorMsg = err.message),
    });
  }
}
