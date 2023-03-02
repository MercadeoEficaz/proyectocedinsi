import { Component } from '@angular/core';
import { InformacioncuerpoService } from '../services/informacioncuerpo.service';
import { TarjetainformacionService } from '../services/tarjetainformacion.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
vehiculos: any; // variable de instancia

constructor (private infoVehiculo:TarjetainformacionService){
  this.vehiculos=infoVehiculo.getVehiculos();
  }
}
