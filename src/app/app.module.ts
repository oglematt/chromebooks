import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GoogleSigninComponent } from './google-sign-in/google-sign-in.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    AppRoutingModule, 
    MaterialModule 
  ],
  declarations: [ AppComponent, HomeComponent, GoogleSigninComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
