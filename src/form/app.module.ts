import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameAddressForm } from './name-address.component';
import { GrumpyCityValidator} from './form.validator';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent , NameAddressForm, GrumpyCityValidator  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
