import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestdirectDirective } from './testdirect.directive';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import {ContactserviceService} from "../services/contactservice.service";

@NgModule({
  declarations: [
    AppComponent,
    TestdirectDirective,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContactserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
