
const form = document.querySelector('form');
let bienvenido = document.querySelector('#titulo');
const mandar = document.querySelector('#sub');
const entradaNombre = document.querySelector('#inputName');

let nombreIngresado;


form.addEventListener('submit', (e) => {
  e.preventDefault();
  nombreIngresado = entradaNombre.value;
  bienvenido.innerHTML = "Hola " + nombreIngresado + ", bienvenido/a!";
  entradaNombre.remove();
  mandar.remove(); 
});

entradaNombre.addEventListener('input', (e) => {
  e.preventDefault();
  sessionStorage.setItem('nombreUsuario', entradaNombre.value);
});

