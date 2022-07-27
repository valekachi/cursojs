
  const paises = [
    {pais: 'gyuUaru', organizado: 'Uruguay'},
    {pais: 'iSagnrup', organizado: 'Singapur'},
    {pais: "uevNa aleZdna", organizado: 'Nueva Zelanda'},
    {pais: "livioBa", organizado: 'Bolivia'},
    {pais: "dánCaa", organizado: 'Canadá'},
    {pais: "baCu", organizado: 'Cuba'},
    {pais: "Epúr", organizado: 'Perú'},
    {pais: "lisBar", organizado: 'Brasil'}
  ];

  let inputPais;
  let solucionIngresada;

    for (const pais of paises) {
    let paisito = document.createElement('h1');
    let inputPais = document.createElement('input');
    let subPais = document.createElement('button');
    document.querySelector('main').style.justifyContent = "center";
    paisito.innerText = (pais.pais); 
    paisito.style.letterSpacing = "20px";
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
    }

const miString = JSON.stringify(avestruz);
const guardarAvestruz = localStorage.setItem('avestruz', miString);

const lista = document.querySelector('#listita');

fetch('data.json') 

  .then((response) => response.json())
  .then((data) => {
                
                const a = document.createElement('a');
                a.innerHTML = '<a href="data.json">REGLAS DEL JUEGO</a>';
                a.className = 'entradaLetra';
                           
          

                

                lista.append(a);

  });