import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserPreferencesService {
  username = signal<string>('Ospite');

  darkTheme = signal<boolean>(false);

  setUsername(nome: string): void {
    this.username.set(nome);
  }

  toggleTheme(x: boolean): void {
    this.darkTheme.update(val => x);
  }
}
