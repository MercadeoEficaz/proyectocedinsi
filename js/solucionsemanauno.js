'use strict'

/*Realizar el algoritmo que convierta litros en centilitros, decilitros, galones y onzas*/

var litros
var centilitros

Multiplicar el valor de volumen por 100

litros = prompt("Ingresa los litros");
centilitros = (litros*100);
console.log(litros+" litros equivalen a "+centilitros+" centilitros");

var decilitros 

Multiplicar el valor de volumen por 10

litros = prompt("Ingresa los litros");
decilitros = (litros*10);
console.log(litros+" litros equivalen a "+decilitros+" decilitros");

var galones

divide el valor de volumen entre 3.785

litros = prompt("Ingresa los litros");
galones = (litros/3.785);
console.log(litros+" litros equivalen a "+galones+" galones");

var onzas

Multiplicar el valor de volumen por 33.814

litros = prompt("Ingresa los litros");
onzas = (litros*33.814);
console.log(litros+" litros equivalen a "+onzas+" onzas");



/*Realizar el algoritmo que realice las 4 operaciones básicas para dos números
de entrada.*/

let numero1 = 2
let numero2 = 5

let resultado = numero1 + numero2;
let resultado2 = numero1 - numero2;
let resultado3 = numero1 / numero2;
let resultado4 = numero1 * numero2;

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);



/*Realizar el algoritmo que convierta grados centígrados en Fahrenheit y viceversa.*/

FormulaMatematica(9/5 * 0 °C) + 32 = 32 °F

var centigrados
var fahrenheit

centigrados = prompt("Ingresa grados centígrados");
farenheit = (9/5*centigrados)+32;

console.log(centigrados+" grados centigrados equivalen a "+farenheit+" grados farenheit");


FormulaMatematica2(32 °F − 32) * 5/9 = 0 °C

farenheit = prompt("Ingresa grados farenheit");
centigrados = (farenheit-32)*5/9;

console.log(farenheit +" grados farenheit equivalen a "+centigrados+" grados centigrados");


/*ÚNICO EJERCICIO CON ERROR*/

/*Realizar un algoritmo que calcule el salario de un empleado según los siguientes
parámetros.
a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.*/

const nombre = prompt("Digite el nombre del empleado");
const salario = prompt("Digite el salario de "+nombre+"");

let salarioTotal = salario;
if (salario <= 699999) {
  salarioTotal = (salario - 0.02 - 0.06);
  console.log("El salario total de " +nombre+" es de"+ salarioFinal+" pesos"); 
} 

/* b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000,
sino le pagan el mismo salario.*/

else if (salario == 700000 <= 999999) {
  salarioTotal = (salario - 0.04 + 12.000)
  console.log("El salario total de " +nombre+" es de"+ salarioFinal+" pesos"); 
} 

/*c. Si gana más del millón Descuento de pensión =6%*/

else if (salario >= 1000000) {
    salarioTotal = (salario - 0.06)
    console.log("El salario total de " +nombre+" es de"+ salarioFinal+" pesos"); 
}
