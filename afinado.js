
const form = document.querySelector('form');
let bienvenido = document.querySelector('#titulo');
const empezando = document.querySelector('#starting');
const entradaNombre = document.querySelector('#inputName');

let nombreIngresado;



form.addEventListener('submit', (e) => {
  e.preventDefault();
  nombreIngresado = entradaNombre.value;
  if (nombreIngresado != "") {
  bienvenido.innerHTML = "Hola " + nombreIngresado + ", bienvenido/a!";
  entradaNombre.remove();
  empezando.innerHTML = "<a href='categorias.html'>¿EMPEZAMOS?</a>"
} else {
      Swal.fire({
    icon: 'error',
    title: 'Oh oh..',
    text: 'Parece que no has ingresado tu nombre. Ingresalo para jugar!',
                  });
  empezando.innerHTML = "<ahref='categorias.html'>¿EMPEZAMOS?</a>"

}});

entradaNombre.addEventListener('input', (e) => {
  e.preventDefault();
  sessionStorage.setItem('nombreUsuario', entradaNombre.value);
  
});
let userName = sessionStorage.getItem('nombreUsuario');
if (userName) {
bienvenido.innerHTML = "Hola " + userName + ", bienvenido/a!"
bienvenido.className = 'bienvenida--mod';
entradaNombre.value = userName;
entradaNombre.style.display = 'none';
empezando.innerHTML = "<a href='categorias.html'>¿EMPEZAMOS?</a>"
}


const lista = document.querySelector('#listita');

fetch('data.json')

.then((response) => response.json())
.then((data) => {
        listaReglas = document.createElement('ul') 

        for (i = 0; i < data.length; ++i) {
        itemLista = document.createElement('li');

        itemLista.innerHTML = data[i].regla;

        listaReglas.appendChild(itemLista);
        lista.appendChild(listaReglas);
    }})
	
    

