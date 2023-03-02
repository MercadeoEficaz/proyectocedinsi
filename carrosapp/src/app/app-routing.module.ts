import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';

const routes: Routes = [
{
  path:'inicio',
  component: CuerpoComponent
},
{
  path:'contacto',
  component: ContactoComponent
},
{
  path:'**',
  component: CuerpoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
