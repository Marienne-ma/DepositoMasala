import { Component, inject } from '@angular/core';
import { UserPreferencesService } from '../../core/services/user-preferences-service';

@Component({
  selector: 'app-settings-component',
  imports: [],
  templateUrl: './settings-component.html',
  styleUrl: './settings-component.css',
})
export class SettingsComponent {

  userPreferenceService = inject(UserPreferencesService)

  setUsername(event: Event) : void {
    const input = event.target as HTMLInputElement
    this.userPreferenceService.setUsername(input.value)
  }

  setDarkTheme() : void {
    this.userPreferenceService.toggleTheme(!this.userPreferenceService.darkTheme())
  }

}
