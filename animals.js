
const animales = [
  {animal: "zArtseuv", organizado: "Avestruz", pista: "Alas y cuello largo"},
  {animal: "rOintrorinco", organizado: "Ornitorrinco", pista: "Mamífero de cuello muy largo"},
  {animal: "lagoMéurci", organizado: "Murciélago", pista: "Me gusta dormir con la cabeza para abajo..."},
  {animal: "oOs", organizado: "Oso", pista: "Si hay algo que me gusta, es la miel!"},
  {animal: "rPreo", organizado: "Perro", pista: "Los humanos dicen que soy su mejor amigo!"},
  {animal: "toGa", organizado: "Gato", pista: "Dicen que somos enemigos de los perros, será así?"}
];

let animalIngresado;


for (const animal of animales) {
  let ordenarAnimal = document.createElement('h1');
  ordenarAnimal.innerText = (animal.animal);
  document.body.appendChild(ordenarAnimal);
  let inputAnimal = document.createElement('input');
  document.body.appendChild(inputAnimal)
  let subAnimal = document.createElement('button');
  let pista = document.createElement('button');
  pista.innerText = "Pista";
  pista.className = "bienvenida";
  subAnimal.innerText = "¡Ordenar!";
  document.body.appendChild(subAnimal);
  document.body.appendChild(pista);
  ordenarAnimal.style.letterSpacing = "20px";
  ordenarAnimal.className = "bienvenida--mod";
  subAnimal.className = "bienvenida";
  subAnimal.innerText = "Ordenar!"
  subAnimal.style.margin = "7px";
  subAnimal.style.padding = "4px";
  inputAnimal.className = "entradaLetra";
  subAnimal.addEventListener('click', (e) => { 
    e.preventDefault();
    let animalIngresado = inputAnimal.value;
    if (animalIngresado === animal.organizado)  {
      Swal.fire({
        title: 'Felicitaciones! Es correcto',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      } else {
        Swal.fire({
          icon: 'error',
          title: '¡Incorrecto!',
          text: 'Vuelve a intentarlo!',
                        });
      }
  });
   pista.addEventListener('click', (e) => {
    Swal.fire(animal.pista);

   })
};
 
 let final = document.createElement('button');
 final.className = "fondo";
 final.innerHTML = "<h1>FINALIZAR!</h1>"
 document.body.appendChild(final);
 final.addEventListener('click', (e) => {
   Swal.fire({
     icon: 'success',
     title: 'Has llegado al fin, ¡esperamos que hayas podido acertar todas las palabras! ¿Te animarías a seguir con la siguiente categoría?',
     html: '<a href="paises.html">PAISES</a>',
     confirmButtonText: 'No, gracias'

 })
 }
 )


const miString = JSON.stringify(animales[0].animal);
const guardarAvestruz = localStorage.setItem(animales[0].animal, miString);
