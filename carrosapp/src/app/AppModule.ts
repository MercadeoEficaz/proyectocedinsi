import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceracarrosappComponent } from './cabeceracarrosapp/cabeceracarrosapp.component';
import { FiltroComponent } from './filtro/filtro.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { FooterComponent } from './footer/footer.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceracarrosappComponent,
    FiltroComponent,
    BusquedaComponent,
    TarjetaComponent,
    FooterComponent,
    CuerpoComponent,
    ContactoComponent,
    InicioComponent,
    FormularioReactivoComponent,
    FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
