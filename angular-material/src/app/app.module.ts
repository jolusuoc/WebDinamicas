import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardFancyExampleComponent } from './card-fancy-example/card-fancy-example.component';
import {MaterialModule} from './material-module/material.module';
@NgModule({
  declarations: [
    AppComponent,
    CardFancyExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
