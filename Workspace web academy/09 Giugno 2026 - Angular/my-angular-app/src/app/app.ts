import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BaseComponent } from './features/base-component/base-component';
import { TitleComponent } from './features/title-component/title-component';
import { ParagraphComponent } from './features/paragraph-component/paragraph-component';
import { ImageComponent } from './features/image-component/image-component';
import { BindingComponent } from './features/binding-component/binding-component';
import { ProductCardcomponent } from './features/product-card-component/product-card-component';
import { DirectivesComponent } from './features/directives-component/directives-component';
import { StudentListComponent } from './features/student-list-component/student-list-component';
import { RegistrationComponent } from './features/registration-component/registration-component';
import { LoginComponent } from './features/login-component/login-component';
import { FormExerciseComponent } from './features/form-exercise-component/form-exercise-component';
import { FormExercise2Component } from './features/form-exercise2-component/form-exercise2-component';
import { ParentComponent } from './features/parent-component/parent-component';
import { SignalExampleComponent } from './features/signal-example-component/signal-example-component';
import { TrafficLightComponent } from './features/traffic-light-component/traffic-light-component';
import { PriceComponent } from './features/price-component/price-component';
import { ProductListComponent } from './features/product-list-component/product-list-component';
import { FeedbackComponent } from './features/feedback-component/feedback-component';
import { ItemListComponent } from './features/item-list-component/item-list-component';
import { ShoppingListComponent } from './features/shopping-list-component/shopping-list-component';
import { AddItemComponent } from './features/add-item-component/add-item-component';
import { PreviewComponent } from './features/preview-component/preview-component';
import { ErrorPageComponent } from './features/Pages/error-page-component/error-page-component';
import { UserProfileComponent } from './features/user-profile-component/user-profile-component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    BaseComponent,
    TitleComponent,
    ParagraphComponent,
    ImageComponent,
    BindingComponent,
    ProductCardcomponent,
    DirectivesComponent,
    StudentListComponent,
    RegistrationComponent,
    LoginComponent,
    FormExerciseComponent,
    FormExercise2Component,
    ParentComponent,
    SignalExampleComponent,
    TrafficLightComponent,
    PriceComponent,
    ProductListComponent,
    FeedbackComponent,
    ItemListComponent,
    AddItemComponent,
    PreviewComponent,
    ErrorPageComponent,
    UserProfileComponent

  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
