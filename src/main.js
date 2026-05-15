// Ejericios Basico

// 1. Operacion aritmetica

let a = 12
let b = 20

let resultado = a + b

console.log(resultado)
console.log(resultado.length)

// Mostrar resultados

console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// 2. Operacion comparativa

console.log(a < b)
console.log(a > b)
console.log(a == b)
console.log(a != b)
console.log(a <= b)
console.log(a >= b)
console.log(a === b)

// 3. Operacion logica

let edad = 25
let tieneTicket = true

console.log(edad >= 18 && tieneTicket) // true
console.log(edad < 18 || tieneTicket) // true
console.log(!tieneTicket) // false

// 4. Condicionales

if (edad <= 18) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}

// 5. Switch case

let dia = 5;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Número de día no válido");
}

// 6. Reasignacion de variables

// operadores de incremento y decremento

let gol = 15

gol = 20;

console.log(gol);

let numeroFish = 10;

numeroFish++;

console.log(numeroFish);

let saldo =50;

saldo += 25;

console.log(saldo);

// 7. Manipulación de strings, template strings, Masyusculas y minusculas y longitud de un string 

let nombre = "Javascript";
let saludo = "Hola, " + nombre + "!";

console.log(saludo);

let saludoTemplate = `Hola, ${nombre}!`;

console.log(saludoTemplate);

console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre.length);

// 8. Conversion de tipos: string a numero, numero a texto, conversion de enteros y decimales

let numero = "123";
console.log(Number(numero)); // Convierte a número

let numero2 = 456;
console.log(String(numero2)); // Convierte a texto

let entero = 10;
console.log(parseInt(entero)); // Convierte a entero

let decimal = "3.14";
console.log(parseFloat(decimal)); // Convierte a decimal

// 9. Multiples condicionales: if, else if, else

let nota = 45;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 60) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// 10. Impar y par

let numero3 = 7;

if (numero3 % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}