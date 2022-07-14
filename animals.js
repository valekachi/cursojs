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
  const ornitorrinco = new Palabras("rOintrorinco", "Ornitorrinco", "Mamífero de cuello muy muy largo!");
  animales.push(ornitorrinco);
  const murcielago = new Palabras("lagoMéurci","Murciélago", "Soy un animal que le gusta dormir con mi cabeza para abajo...");
  animales.push(murcielago);

console.log(animales);
  const paises = [
    {pais: 'gyuUaru', organizado: 'Uruguay'},
    {pais: 'iSagnrup', organizado: 'Singapur'},
    {pais: "uevNa aleZdna", organizado: 'Nueva Zelanda'},
    {pais: "livioBa", organizado: 'Bolivia'},
    {pais: "dánCaa", organizado: 'Canadá'},
    {pais: "baCu", organizado: 'Cuba'}
  ];

  let inputPais;
  let solucionIngresada;

    for (const pais of paises) {
    let ordenados = document.createElement('form');
    let paisito = document.createElement('h1');
    let inputPais = document.createElement('input');
    let subPais = document.createElement('button');
    paisito.innerText = (pais.pais); 
    paisito.className = "bienvenida--mod";
    subPais.className = "bienvenida";
    subPais.innerText = "Ordenar!"
    subPais.style.margin = "7px";
    subPais.style.padding = "4px";
    inputPais.className = "entradaLetra";
    document.body.append(ordenados);
    document.body.appendChild(paisito);
    document.body.appendChild(inputPais);
    document.body.appendChild(subPais);
   subPais.addEventListener('click', (e) => { 
    e.preventDefault();
    let solucionIngresada = inputPais.value;
    if (solucionIngresada === pais.organizado)  {
      let correcto = document.createElement("h1");
        correcto.innerHTML = "Correcto!";
        document.body.append(correcto);
      } else {
    let incorrecto = document.createElement("h1");
        incorrecto.innerHTML = "Incorrecto. Sigue intentando!";
        document.body.append(incorrecto);
      }
  });
    }

const miString = JSON.stringify(avestruz);
const guardarAvestruz = localStorage.setItem('avestruz', miString);

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'Aprendiendo a usar fetch',
    body: 'En mi curso de JavaScript',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));