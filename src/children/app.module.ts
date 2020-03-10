import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, OrganizingChild, IgnoringChild } from './app.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ AppComponent, OrganizingChild, IgnoringChild ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
