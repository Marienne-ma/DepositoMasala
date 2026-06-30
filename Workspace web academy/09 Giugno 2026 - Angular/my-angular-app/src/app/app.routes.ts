import { Routes } from '@angular/router';
import { HomeComponent } from './features/Pages/home-component/home-component';
import { AboutComponent } from './features/Pages/about-component/about-component';
import { SignalExampleComponent } from './features/signal-example-component/signal-example-component';
import { ParentComponent } from './features/parent-component/parent-component';
import { ErrorPageComponent } from './features/Pages/error-page-component/error-page-component';
import { UserProfileComponent } from './features/user-profile-component/user-profile-component';
import { LoginPageComponent } from './features/Pages/login-page-component/login-page-component';
import { AdminPageComponent } from './features/Pages/admin-page-component/admin-page-component';
import { authGuard } from './core/guards/auth-guard';
import { adminGuard } from './core/guards/admin-guard';
import { SettingPageComponent } from './features/Pages/setting-page-component/setting-page-component';
import { EditComponent } from './features/edit-component/edit-component';
import { unsavedChangesGuard } from './core/guards/unsaved-changes-guard';
import { Login2PageComponent } from './features/Pages/login2-page-component/login2-page-component';
import { auth2Guard } from './core/guards/auth2-guard';
import { Home2PageComponent } from './features/Pages/home2-page-component/home2-page-component';
import { AddTaskComponent } from './features/Pages/add-task-component/add-task-component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signal-ex', component: SignalExampleComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'user/:id', component: UserProfileComponent },
  {path: 'login', component: LoginPageComponent},

  {path: 'admin',
    component: AdminPageComponent,
    canActivate: [authGuard, adminGuard],
    canActivateChild: [adminGuard],
    children: [
      {path:'settings', component: SettingPageComponent}
    ]
  },
  {path: 'login2', component: Login2PageComponent,
  },
{path: "home2", component: Home2PageComponent, canActivate: [auth2Guard]},
  {path: 'edit', component: EditComponent, canDeactivate: [unsavedChangesGuard]},
  {path: "task", component: AddTaskComponent},
  { path: '**', component: ErrorPageComponent }
];
