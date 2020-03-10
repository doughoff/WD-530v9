import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CurlyQuotesPipe} from './curlyquotes.pipe';
import {DogDetail} from './dog-detail.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ AppComponent, CurlyQuotesPipe, DogDetail ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
