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
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormularioTemplateComponent } from './formulario-template/formulario-template.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    FormularioTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
