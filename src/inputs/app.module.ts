import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, InputChild, DogList, DogName  } from './app.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ AppComponent, InputChild, DogList, DogName],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }