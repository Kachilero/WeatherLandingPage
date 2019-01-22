import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    SignUpFormComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    CurrentWeatherComponent,
    SignUpFormComponent
  ],
  // exports: [CurrentWeatherComponent]
})
export class AppModule { }
