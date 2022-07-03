const animales = [];
class Palabras {
    constructor(desordenado, solucion, pista) {
      this.desordenado = desordenado;
      this.solucion = solucion;
      this.pista = pista;
  }
  }
  const avestruz = new Palabras ("zArtseuv","Avestruz", "Alas y cuello largo");
  animales.push(avestruz);
  const ornitorrinco = new Palabras("rOintrorinco","Ornitorrinco", "Mamífero de cuello muy muy largo!");
  animales.push(ornitorrinco);
  const murcielago = new Palabras("lagoMéurci","Murciélago", "Soy un animal que le gusta dormir con mi cabeza para abajo...");
  animales.push(murcielago);

console.log(animales);
  const paises = [
    {pais: 'gyuUaru'},
    {pais: 'iSagnrup'},
    {pais: "uevNa aleZdna"},
    {pais: "livioBa"},
    {pais: "dánCaa"},
    {pais: "baCu"}
  ];

    for (const pais of paises) {
    let paisito = document.createElement('h1');
    let inputPais = document.createElement('input');
    let subPais = document.createElement('button');
    paisito.innerText= (pais.pais);
    document.body.append(paisito);
    document.body.append(inputPais);
    document.body.append(subPais);
    paisito.className = "bienvenida--mod";
    subPais.className = "bienvenida";
    subPais.innerText = "¡Ordenar!";
    subPais.style.margin = "7px";
    subPais.style.display = "flex"
    subPais.style.justifyContent = "center";
    

    inputPais.className = "entradaLetra";
  };

const miString = JSON.stringify(avestruz);
const guardarAvestruz = localStorage.setItem('avestruz', miString);

 m

let ordenelo = document.querySelector('#ordene');
const formAnimal = document.querySelector('#formAnimales');
const ornito = document.querySelector('#orni');
const ornitoSub = document.querySelector('#subAnimal');

let solucionIngresada;

formAnimal.addEventListener('submit', (e) => {
  e.preventDefault();
  solucionIngresada = ornito.value;
  if (solucionIngresada === ornitorrinco.solucion) {
  let correcto = document.createElement("p");
    correcto.innerHTML = "Correcto!";
    document.body.append(correcto);
  } else {
let incorrecto = document.createElement("p");
    incorrecto.innerHTML = "Incorrecto. Sigue intentando!";
    document.body.append(incorrecto);
  }
});

