import { Component, inject } from '@angular/core';
import { UserPreferencesService } from '../../core/services/user-preferences-service';
import { SettingsComponent } from '../settings-component/settings-component';

@Component({
  selector: 'app-preview-component',
  imports: [SettingsComponent],
  templateUrl: './preview-component.html',
  styleUrl: './preview-component.css',
})
export class PreviewComponent {


  userPreferencesService = inject(UserPreferencesService)


}
