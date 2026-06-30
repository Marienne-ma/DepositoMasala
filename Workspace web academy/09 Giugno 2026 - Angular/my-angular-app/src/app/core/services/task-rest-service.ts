import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AddTaskComponent } from '../../features/Pages/add-task-component/add-task-component';
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
@Service()
export class TaskRestService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/tasks';

  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('Errore recupero task', err);
        return throwError(() => new Error('errore nel recupero delle task'));
      }),
    );
  }

  addTask(task: Omit<Task, 'id' | 'completed'>): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task).pipe(
      catchError((err) => {
        console.error('Errore recupero task', err);
        return throwError(() => new Error('errore nel recupero delle task'));
      }),
    );
  }
}
