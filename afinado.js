let ingresarNombre = prompt("Ingresa tu nombre!");

const letrasMinus = [
  "a","b","c","d","e","f","g","h","i",
  "j","k","l","m","n","ñ","o","p","q",
  "r","s","t","u","v","w","x","y","z"
];

const letrasMay = [
  "A","B","C","D","E","F","G","H","I",
  "J","K","L","M","N","Ñ","O","P","Q",
  "R","S","T","U","V","W","X","Y","Z"
];
const vocalesTildes = [
  "á","é","í","ó","ú"
]


class Palabras {
  constructor(categoria, solucion, pista) {
    this.categoria = categoria;
    this.solucion = solucion;
    this.pista = pista;
}
  pedirpista() {
    //alert(this.pista);  
  }
}
const avestruz = new Palabras ("animal", "Avestruz", "Alas y cuello largo");
const ornitorrinco = new Palabras("animal", "Ornitorrinco", "Mamífero de cuello muy muy largo!");
const murcielago = new Palabras("animal", "Murciélago", "Soy un animal que le gusta dormir con mi cabeza para abajo...");

let ornitorrincoOrdenado = ornitorrinco.solucion;
let ornitorrincoDesordenado = prompt("Ordena la siguiente palabra: ocnirrotinrO.")
while (ornitorrincoDesordenado != ornitorrincoOrdenado) {
  ornitorrincoDesordenado = prompt("Sigue intentando!");
}
alert("Correcto!!");
const paises = [
  {pais: "Uruguay", continente: "Latinoamérica"},
  {pais: "Singapur", continente: "Asia"},
  {pais: "Nueva Zelanda", continente: "Oceanía"},
  {pais: "Bolivia", continente: "Latinoamerica"},
  {pais: "Canadá", continente: "Norteamérica"},
  {pais: "Cuba", continente: "Centroamérica"}
]
paises.pop();
paises.reverse();
paises.slice(0,2);

let nivelSuperado = true
let puntos = 0
function puntaje() {
  if (nivelSuperado) {
    puntos += 1;
    //alert("Felicitaciones! Ganaste un punto");
  } 
}
puntaje();


let oso = letrasMay[15] + letrasMinus[19] + letrasMinus[15];
let osoDesordenado = prompt("ordena las siguientes letras: " + letrasMay[15] + " " + letrasMinus[15] + " " + letrasMinus[19] + " Pista: animal" );
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
//CONSULTO LENGTH PARA PODER VER EL ÍNDICE DE CADA ELEMENTO EN LA CONSOLA //


let gato = letrasMay[6] + letrasMinus[0] + letrasMinus[20] + letrasMinus[15];


let nandu = letrasMay[14] + letrasMinus[0] + letrasMinus[13] + letrasMinus[3] + vocalesTildes[4];
let nanduDesordenado = prompt("Ordena las siguientes letras: " + letrasMinus[0] + letrasMay[14] + vocalesTildes[4] + letrasMinus[13] + letrasMinus[3] + ". Pista: animal");
while (nanduDesordenado != nandu) {
  nanduDesordenado = prompt("Sigue intentando!");
}
alert("Correcto! Felicitaciones. Esta si que era difícil!")

const perro = letrasMay[16] + letrasMinus[4] + letrasMinus[18] + letrasMinus[18] + letrasMinus[15];


//EJERCICIO EN CLASE
/*const elementosIniciales = [
    {nombre: "Daniel", edad: 32},
    {nombre: "Martina", edad: 7},
    {nombre: "Karen", edad: 23},
    {nombre: "Amelia", edad: 2}
  ]
  elementosIniciales.shift();
  console.log(elementosIniciales);


const elementoAgregar = [
      {nombre: "Felipe", edad: 36},
      {nombre: "Julieta", edad: 7},
      {nombre: "Edgar", edad: 66}
    ]
    elementoAgregar.pop();
    console.log(elementoAgregar);

  let elementosFinales = elementosIniciales.concat(elementoAgregar);
    console.log(elementosFinales);
    elementosFinales.reverse();

  console.log(elementosFinales);*/


console.dir(document)
let titulo = document.getElementById('titulo');
titulo.innerText = titulo.innerHTML + ", " + ingresarNombre;
console.log(titulo.innerText)

let formularioAnimal = document.getElementById("formAnimal");
formularioAnimal.innerHTML = "<input type='text' maxlength='1'></input>";
formularioAnimal.className = "empezamos" //Ver cómo hago para que el input quede más pequeño









