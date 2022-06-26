
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
console.log(letrasMay);
const vocalesTildes = [
  "á","é","í","ó","ú"
]


class Palabras {
  constructor(categoria, solucion, pista) {
    this.categoria = categoria;
    this.solucion = solucion;
    this.pista = pista;
}
}
const avestruz = new Palabras ("animal", "Avestruz", "Alas y cuello largo");
const ornitorrinco = new Palabras("animal", "Ornitorrinco", "Mamífero de cuello muy muy largo!");
const murcielago = new Palabras("animal", "Murciélago", "Soy un animal que le gusta dormir con mi cabeza para abajo...");

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

const form = document.querySelector('form');
let bienvenido = document.querySelector('#titulo');
const mandar = document.querySelector('#sub');
const entradaNombre = document.querySelector('#inputName');

let nombreIngresado;


form.addEventListener("submit", (e) => {
  e.preventDefault();
  nombreIngresado = entradaNombre.value;
  bienvenido.innerHTML = "Hola " + nombreIngresado + ", bienvenido/a!";
  entradaNombre.remove();
  mandar.remove(); 
})

entradaNombre.addEventListener('input', (e) => {
  sessionStorage.setItem('inputName', entradaNombre.value);
})

const miString = JSON.stringify(ornitorrinco);
const guardarOrni = localStorage.setItem('ornitorrinco', miString);



const ordenelo = document.querySelector('#ordene');
const formAnimal = document.querySelector('#formAnimales');
const ornito = document.querySelector('#orni');
const ornitoSub = document.querySelector('#subAnimal');

let solucionIngresada;

formAnimal.addEventListener("submit", (e) => {
  e.preventDefault();
  solucionIngresada = ornito.value;
  if (solucionIngresada === ornitorrinco.solucion) {
  let correcto = document.createElement("p");
    correcto.innerHTML = "Correcto!";
    document.body.append(correcto);
  } else {
let incorrecto = document.createElement("p")
    incorrecto.innerHTML = "Incorrecto. Sigue intentando!";
    document.body.append(incorrecto);
  }


});