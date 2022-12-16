'use strict'

/*Realizar un programa que permita generar 100 números e imprimir solo los
números pares*/

for(let i =0; i<=100; i++){
    if(i%2==0){
        document.write(i) 
    }
}


/*Realizar un programa que permita sumar los 150 primeros números*/

let acumulador =0;
for(let i =1; i<=150; i++){
    acumulador += i;
    //console.log("vueltas:"+i);
}
console.log("suma:"+acumulador);



/*Leer 12 notas de estudiantes y determinar cuántas aprobó y cuantas reprobó,
dado un rango 0 a 10, reprueba cuando la nota está entre 0 y 5.*/

const nombre = prompt("digite su nombre")
const calificacion = Number(prompt("digite su nota"))

console.log("su nombre es:", nombre, "su calificación es:", calificacion);

if(calificacion <= 5){
    console.log("Reprueba, debes estudiar más.")
}
else if (calificacion >= 6 <= 9){
    console.log("Pasa la materia.")
}
else if (calificacion == 10){
    console.log("Excelente, pasa la materia con nota perfecta.")
    }


/*Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir
la cantidad.*/

for(let i =0; i<50; i++){
    if(i%3==0){
        document.write(i) 
    }
}

console.log("suma:"+i);



/*Realizar un programa que pida la base, el exponente y se ejecute el cálculo
sin uso de bibliotecas */

const base = Number(prompt("digite la base"))
const elevar = Number(prompt("digite el exponente"))
var elevado = Math.pow(base, elevar);
console.log(base+" como base con exponente " +elevar+ " da como resultado " +elevado+"");



/*Llenar un arreglo de tamaño n, y estos elementos sean 1 y 0 alternado e
imprimir por consola.*/

const arreglo = ['1', '0', '1'];

const arregloLength = arreglo.push('1', '0');

console.log(arregloLength); 
console.log(arreglo); 



/*Llenar un arreglo con los primeros 100 números de la sucesión Fibonacci.
0,1,1,2,3,5,8,13…………….*/

function fibonacci(numero)
{
    let numeros=[0,1];
    for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;}

document.write(fibonacci(100)); 
