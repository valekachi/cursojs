
let bienvenida = alert("En este juego deberás ordenar las letras para formar palabras. ¡Adelante!")

let letrasMinus = [
  "a","b","c","d","e","f","g","h","i",
  "j","k","l","m","n","ñ","o","p","q",
  "r","s","t","u","v","w","x","y","z"
];
let letrasMay = [
  "A","B","C","D","E","F","G","H","I",
  "J","K","L","M","N","Ñ","O","P","Q",
  "R","S","T","U","V","W","X","Y","Z"
];
let vocalesTildes = [
  "á","é","í","ó","ú"
]
let oso = letrasMay[15] + letrasMinus[19] + letrasMinus[15];
let osoDesordenado = prompt("ordena las siguientes letras: " + letrasMay[15] + letrasMinus[15] + letrasMinus[19] + " Pista: animal" );
while (osoDesordenado != oso) {
osoDesordenado = prompt("Sigue intentando!")
}
alert("Correcto! La palabra es Oso.")

let elefante = letrasMay[4] + letrasMinus[11] + letrasMinus[4] + letrasMinus[5] + letrasMinus[0] + letrasMinus[13] + letrasMinus[20] + letrasMinus[4];
let elefanteDesordenado = prompt("Ordena las siguientes letras: " + letrasMinus[11] + letrasMay[4] + letrasMinus[5] + letrasMinus[13] + letrasMinus[0] + letrasMinus[20] + letrasMinus[4] + letrasMinus[4] + ". Pista: animal. ");
while (elefanteDesordenado != elefante) {
  elefanteDesordenado = prompt("Sigue intentando!");
}
alert("Correcto! La palabra es Elefante.")
letrasMinus.length;
console.log(letrasMinus);

let gato = letrasMay[6] + letrasMinus[0] + letrasMinus[20] + letrasMinus[15];
console.log(gato);

let nandu = letrasMay[14] + letrasMinus[0] + letrasMinus[13] + letrasMinus[3] + vocalesTildes[4];
let nanduDesordenado = prompt("Ordena las siguientes letras: " + letrasMinus[0] + letrasMay[14] + vocalesTildes[4] + letrasMinus[13] + letrasMinus[3] + ". Pista: animal");
while (nanduDesordenado != nandu) {
  nanduDesordenado = prompt("Sigue intentando!");
}
alert("Correcto! Felicitaciones. Esta si que era difícil!")


























// EJERCICIO EN CLASE
// const elementosIniciales = [
//     {nombre: "Daniel", edad: 32},
//     {nombre: "Martina", edad: 7},
//     {nombre: "Karen", edad: 23},
//     {nombre: "Amelia", edad: 2}
//   ]
//   elementosIniciales.shift();
//   console.log(elementosIniciales);


//   const elementoAgregar = [
//     {nombre: "Felipe", edad: 36},
//     {nombre: "Julieta", edad: 7},
//     {nombre: "Edgar", edad: 66}
//   ]
//   elementoAgregar.pop();
//   console.log(elementoAgregar);
  //
//   let elementosFinales = elementosIniciales.concat(elementoAgregar);
//   console.log(elementosFinales);
//   elementosFinales.reverse();
//   console.log(elementosFinales);

