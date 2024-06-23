let numUsuario = parseInt(prompt('Ingrese un número mayor a 0'));

while (isNaN(numUsuario) || numUsuario <= 0) {
    console.log('Por favor, ingrese un número válido mayor a cero.');
    numUsuario = parseInt(prompt('Ingrese un número mayor a 0'));
}

console.log('entra al else');
let arrayNumeros = [];


if (numUsuario >= 1) {
    arrayNumeros.push(0);
}
if (numUsuario >= 2) {
    arrayNumeros.push(1);
}


for (let i = 2; i < numUsuario; i++) {
    let suma = arrayNumeros[i - 1] + arrayNumeros[i - 2];
    arrayNumeros.push(suma);
}

console.log(`La serie de Fibonacci hasta el ${numUsuario} término es:`, arrayNumeros);
