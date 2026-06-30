import { CanDeactivateFn } from '@angular/router';
import { EditComponent } from '../../features/edit-component/edit-component';

export const unsavedChangesGuard: CanDeactivateFn<EditComponent> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {

  if(component.hasUnsavedChanges()) {

    return confirm("hai modifiche da salvare, vuoi davvero uscire?")
  }
  return true;
};
