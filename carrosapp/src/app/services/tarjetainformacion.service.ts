import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarjetainformacionService {
  vehiculos = [{
  titulo: "Renault Logan Familiar",
  precio: 42000000,
  kilometraje: 45.000,
  modelo: 2019,
  ubicacion: "Bogotá"},

  {
  titulo: "Mazda",
  precio: 60000000,
  kilometraje: 50.000,
  modelo: 2020,
  ubicacion: "Bogotá"},

  {
  titulo: "Toyota",
  precio: 80000000,
  kilometraje: 45.000,
  modelo: 2021,
  ubicacion: "Bogotá"

}]
  constructor() { }
  getVehiculos () {return this.vehiculos}

}
