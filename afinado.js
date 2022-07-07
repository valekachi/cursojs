
const form = document.querySelector('form');
let bienvenido = document.querySelector('#titulo');
const empezando = document.querySelector('#empezando');
const entradaNombre = document.querySelector('#inputName');

let nombreIngresado;


form.addEventListener('submit', (e) => {
  e.preventDefault();
  nombreIngresado = entradaNombre.value;
  if (nombreIngresado != "") {
  bienvenido.innerHTML = "Hola " + nombreIngresado + ", bienvenido/a!";
  entradaNombre.remove();
} else {
      Swal.fire({
    icon: 'error',
    title: 'Oh oh..',
    text: 'Parece que no has ingresado tu nombre. Ingresalo para jugar!',
})
  }
});

entradaNombre.addEventListener('input', (e) => {
  e.preventDefault();
  sessionStorage.setItem('nombreUsuario', entradaNombre.value);
});

