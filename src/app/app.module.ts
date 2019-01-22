import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ExampleComponent } from './example/example.component';
import { ModalComponent } from './modal/modal.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CurrentWeatherComponent,
    SignUpFormComponent,
    ExampleComponent,
    ModalComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [
    CurrentWeatherComponent,
    SignUpFormComponent
  ],
  entryComponents: [
    TermsAndConditionsComponent
  ]
  // exports: [CurrentWeatherComponent]
})
export class AppModule { }
