/* Primer apartado */
console.log();
console.log("Route	to	node.js: " + process.argv[0]); // Muestra ruta del interprete
console.log("Route	to	this	file: " + process.argv[1]); // Muestra fichero nombre del fichero .js
console.log();

/* Segundo apartado */
// Definimos arrayParametros con los parámetros de entrada
let [,,...arrayParametros] = process.argv;
// Definimos arrayBorrar que contendrá los elementos que tenemos que borrar del arrayParametros
let arrayBorrar = [];
// Detectamos parametro a borrar del arrayParametros y los cargamos en el arrayBorrar
arrayParametros.forEach(function(elemento,i) {
	if (elemento == "-r") {
		arrayBorrar.push(arrayParametros[i+1]); // El parámetro a borrar es el siguiente al parámetro "-r"
	}	
});



arrayParametros.forEach(function(elemento,i) {
console.log("ArrayParametros: " + arrayParametros[i]);
});



// Añadimos el elemento "-r" al arrayBorrar
arrayBorrar.push('-r');

console.log("\n");

arrayBorrar.forEach(function(elemento,i) {
console.log("ArrayBorrar: " + arrayBorrar[i]);
});

console.log("\n");
//
let arrayLimpio = [];

// Incluimos en arrayLimpio todos los elementos de arrayParametros no incluidos en arrayBorrar
arrayParametros.forEach(function(elemento,i) {
//	if (!(arrayParametros[i] in arrayBorrar)) {
	if (!(arrayBorrar.includes(arrayParametros[i]))) {
		arrayLimpio.push(arrayParametros[i]);
	}
});


arrayLimpio.forEach(function(elemento,i) {
console.log("ArrayLimpio: " + arrayLimpio[i]);
});

// Ordenamos alfabeticamente arrayLimpio
arrayLimpio.sort();

console.log("\n");


// Visualizamos los parámetros, contando su número

arrayLimpio.forEach(function(elemento, i) {
  let cont = arrayLimpio.reduce((ac, el, i, a) => el===elemento ? ++ac : ac, 0);
  console.log(`${elemento} : ${cont}`);
});




