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
    paisito.innerText = "ORDENA LAS SIGUIENTES LETRAS: " + JSON.stringify(Object.values(pais));
    document.body.append(paisito);
    document.body.append(inputPais);
    document.body.append(subPais);
    console.log(pais);
  };

const miString = JSON.stringify(avestruz);
const guardarAvestruz = localStorage.setItem('avestruz', miString);



const ordenelo = document.querySelector('#ordene');
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