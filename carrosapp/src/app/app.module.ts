import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceracarrosappComponent } from './cabeceracarrosapp/cabeceracarrosapp.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceracarrosappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
