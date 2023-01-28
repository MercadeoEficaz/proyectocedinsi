import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceracarrosappComponent } from './cabeceracarrosapp/cabeceracarrosapp.component';
import { FiltroComponent } from './filtro/filtro.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceracarrosappComponent,
    FiltroComponent,
    BusquedaComponent,
    TarjetaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
