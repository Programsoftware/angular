import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  
  declarations: [    
    AppComponent, MainNavComponent, LoginComponent, HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent, MainNavComponent, LoginComponent],
})
export class AppModule { }
