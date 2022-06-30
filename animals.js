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
  ];
  
for (const nacion of paises) {
    let paisillos = document.createElement("h1");
    cadaPais = JSON.stringify(nacion.pais);
    document.body.append(cadaPais);
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

