

/*
console.log ("Hola Mundo!");
*/

/*
let saludo = ("Hola mundo!");
console.log (saludo);
//Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
/*
let nombre = prompt ("Coloca Aqui tu primer Nombre")
alert (`Hola, ${nombre}!`);
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/

let numeroUsuario = prompt ("Ingresa el numero aqui");
let numMultiplicador = 2;
parseInt (alert(numeroUsuario * numMultiplicador));
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.


/*
let primerNum = prompt ("Dame un Número");
let segundoNum = prompt ("Dame un Segundo Número");
let tercerNum = prompt ("Dame un Tercer Número");
let N1 = Number(primerNum);
let N2 = Number(segundoNum);
let N3 = Number(tercerNum);
let sumaNum = (N1 + N2 + N3);
let promedio= (sumaNum / 3);
alert(`El Promedio de tus numeros es ${promedio}`);
//Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/

/*
let primerNum = prompt ("Escribe aqui un numero");
let segundoNum = prompt ("Escribe un Segundo numero");
let Num1 = Number(primerNum);
let Num2 = Number(segundoNum);
if (Num1 < Num2){
     alert (`el numero mayor es ${Num2}`);
}else if(Num1 > Num2){
    alert (`el numero mayor es ${Num1}`);
}else{(Num1 == Num2);
alert(`el numero mayor es ${Num2}`);
}
*/
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
/*
ejemplo de Alura:
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);
*/

/*
let numero = prompt ("Coloca un Numero");
let numero1 = Number(numero);
let formula = (numero1 * numero1);
alert (formula);
//Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
//respuesta de Alura

function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);
*/

/*
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1, nota2, nota3, nota4){
  let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
return promedio;
}
function verificarAprobacion(promedio){
  return promedio >= 5 ? "Aprobado" : "Reprobado";
}
let promedio = calcularPromedio (nota1, nota2, nota3, nota4);
console.log(promedio);
console.log(verificarAprobacion(promedio));
*/

/*
  function calcularPromedio(nota1, nota2, nota3, nota4){
    let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4;
  } */

// EJERCICIO:}
/*
    function calcularDobleTriple(numero) {
      const doble = numero * 2;
      const triple = numero * 3;
    
      return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
    }
    
    const numero = 5;
    const resultado = calcularDobleTriple(numero);
    console.log(resultado);
*/
//opciones 
// esta tiene error debido a que numero * 2 y numero * 3 no estan dentro de parentesis por lo cual el resultado podria tener errores:
/*
    function calcularDobleTriple(numero) {
      return numero * 2 + " es el doble y " + numero * 3 + " es el triple.";
    }
    
    const numero = 5;
    const resultado = calcularDobleTriple(numero);
    console.log(resultado);
  */ 
    //Esta esta bien diseñada:
/*
    function calcularDoble(numero) {
      return numero * 2;
    }
    
    function calcularTriple(numero) {
      return numero * 3;
    }
    
    const numero = 5;
    const doble = calcularDoble(numero);
    const triple = calcularTriple(numero);
    
    console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);
   */
    // esta funcion es errada por que aqui hay un error: const resultado = {};
    /*
    function calcularDobleTriple(numero) {
      const resultado = {};
      resultado.doble = numero * 2;
      resultado.triple = numero * 3;
      return resultado;
    }
    
    const numero = 5;
    const resultado = calcularDobleTriple(numero);
    
    console.log(`El doble de ${numero} es ${resultado.doble} y el triple es ${resultado.triple}.`);
    */

    /*
    //Calculo de Masa Corporal:
    let peso = 65;
    let estatura = alturaMaxima ();
    function alturaMaxima () {
       return 165 / 100;
    } 
    alert (`Si su peso es ${peso} Kg y su estatura es ${estatura} Mts Entonces su IMC es ${(peso / (estatura * estatura)).toFixed(2)}`);
//QUEDO EXCELENTE
    */

/*
// Tasa Representativa del Mercado en Colombia
let dolar = prompt ('Dolares que quieres pasar a pesos');
let dolares = parseFloat(dolar);
const pesoColombiano = parseFloat(4088.05);
function Conversion (){
  return Number(dolar * pesoColombiano);
}
alert (`El TRM para hoy es $${pesoColombiano}, por esa cantidad de dolares te pagarán $${Conversion ().toFixed(2)} COP`);
*/
//Quedo Excelente
/*
function calcularAreaYPerimetro(radio) {
  const PI = 3.14;

  // Calcular el área del círculo
  let area = PI * radio * radio;

  // Calcular el perímetro del círculo
  let perimetro = 2 * PI * radio;

  // Mostrar los resultados en la consola
  console.log(`El área del círculo con radio ${radio} es: ${area}`);
  console.log(`El perímetro del círculo con radio ${radio} es: ${perimetro}`);
}

// Ejemplo de uso:
let radioSala = 5; // Puedes cambiar este valor según el radio que desees calcular
calcularAreaYPerimetro(radioSala);
*/

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
/*
let numeroInicial = prompt ('asigna un numero para mostrar la tabla');
numeroInicial = parseFloat(numeroInicial);

function numerosAmultiplicar (numero){
  return numero * 2;
}
let resultado = numerosAmultiplicar(numeroInicial);
alert (`tu tabla es la siguiente ${resultado}`);
*/
/*
function mostrarTablaDeMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);
//Esta es correcta pero no la hice yo!
*/
/*
//Contador
function contarHastaCinco (){
  let contador = 1; 
  while (contador <= 5){
  console.log(contador);
  contador++;}}

contarHastaCinco ()
*/
/*
let listaCompras = [];
//este push ingresa un elemento a la lista
listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");

listaCompras.length;
*/

//repartir frutas para que todos coman y cuando se acaben entonces vamos a rpartir de nuevo la misma cantidad de frutas

/*
let frutas = ["manzana", "fresa", "banano", "uvas"]; 
let Personas = ['Pedro', 'Juan', 'Luis', 'Tania'];
function repartirFrutas (){
if (Personas.length === frutas.length)
  {console.log ('Todos comieron');

  }else{
    console.log('No se pueden repartir las frutas igualmente');
  }
}
repartirFrutas ()
//si quiero volver a repartir 
{
if (repartirFrutas < frutas.length);} console.log ('se vuelve a repartir');
if (frutas.includes ("fresa")){console.log('Pedro se puede comer una Fresa');}
frutas.push("limon");
console.log('Frutas restantes:', '[' + frutas.map(fruta => `'${fruta}'`).join(', ') + ']');
*/

/*//ya quedo esta operacion Ok
lenguajeDeProgramacion = ['Javascript', 'C','C++','Kotlin','Python'];
lenguajeDeProgramacion.push ('java','Ruby','GoLang');
/*function mostrarLenguajes() {
  console.log('Lenguajes de Programación:');
  lenguajeDeProgramacion.forEach(lenguaje => {
    console.log(lenguaje);
  });
}
// Llamamos a la función para mostrar los lenguajes de programación
mostrarLenguajes();
*/
//mostrar en orden inverso:
/*function mostrarEnOrdenInverso (){
  let lenguajes = lenguajeDeProgramacion.slice().reverse() 
  lenguajes.forEach(lenguaje => {
    console.log(lenguaje);
  });
  }
mostrarEnOrdenInverso();

function promedioLenguajes (){
let totalLenguajes = lenguajeDeProgramacion.length;
console.log(totalLenguajes);
}
promedioLenguajes ();
*/
//lista de ejemplo para ejercicio


/*
for(let i = 0;i <= 5;i++){
console.log(i * 2);
}
*/
//Escribe un programa que imprima los números del 1 al 20. Pero para los múltiplos de 3, imprime "Fizz" 
//en lugar del número, y para los múltiplos de 5, imprime "Buzz". Para los números que son múltiplos tanto de 3 como de 5, imprime "FizzBuzz".
/*
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/
/*
//Escribe un programa que encuentre la suma de todos los números pares del 1 al 100.
let suma = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    suma += i; // Suma solo los números pares
  }
}

console.log("La suma de los números pares del 1 al 100 es: " + suma);
*/
//Escribe un programa que tome una cadena de texto y cuente cuántas veces aparece la letra 'a' (o 'A') en la cadena.
/*let texto = "En el bosque encantado, los árboles susurraban secretos a los pequeños duendes. Un día, el duende Curioso encontró una llave brillante. Siguió su brillo hasta una puerta mágica y descubrió un mundo lleno de estrellas.";
let contador = 0;
for(let i=1;i < 2000;i++){
  if (i === 'a' || i === 'A'){
console.log(contador * 1);
  }
}
// Completa aquí

console.log(`La letra 'a' aparece ${contador} veces en el texto.`);
*/
/*
//Escribe un programa que tome una frase y cuente cuántas veces aparece la letra 'e' (mayúscula o minúscula) en la frase.
let frase = "La inteligencia es la habilidad de adaptarse al cambio. Stephen Hawking";
let contador = 0;
for(let i = 0; i < frase.length; i++){
  if(frase[i] === 'e' || frase[i] === 'E'){
  contador++;
}
}
// Completa aquí

console.log(`La letra 'e' aparece ${contador} veces en la frase.`);
*/




