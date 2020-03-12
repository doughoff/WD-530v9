import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, OrganizingChild, IgnoringChild, DetailsOrganizer, HeadlineSummaryOrganizer } from './app.component';

@NgModule({
  imports:      [ BrowserModule  ],
  declarations: [ AppComponent, OrganizingChild, IgnoringChild, DetailsOrganizer, HeadlineSummaryOrganizer ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
