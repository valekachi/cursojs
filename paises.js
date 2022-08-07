
  const paises = [
    {pais: 'gyuUaru', organizado: 'Uruguay', pista: "Pequeño país rioplatense"},
    {pais: 'iSagnrup', organizado: 'Singapur', pista: "Se encuentra entre Malasia e Indonesia"},
    {pais: "uevNa aleZdna", organizado: 'Nueva Zelanda', pista: "A sus ciudadanos se les dice kiwis..."},
    {pais: "livioBa", organizado: 'Bolivia', pista: "País andino sin salida al mar"},
    {pais: "dánCaa", organizado: 'Canadá', pista: "Su bandera es roja y blanca y tiene una hoja!"},
    {pais: "baCu", organizado: 'Cuba', pista: "Su capital es La Habana"},
    {pais: "Epúr", organizado: 'Perú', pista: "País andino que tiene salida la mar..."},
    {pais: "lisBar", organizado: 'Brasil', pista: "Es el país más grande de América del Sur!"}
  ];

  let inputPais;
  let solucionIngresada;

    for (const pais of paises) {
    let ordenados = document.createElement('form');
    let paisito = document.createElement('h1');
    let inputPais = document.createElement('input');
    let subPais = document.createElement('button');
    let darPista = document.createElement('button');
    document.querySelector('main').style.justifyContent = "center";
    paisito.innerText = (pais.pais); 
    paisito.style.letterSpacing = "20px";
    paisito.className = "bienvenida--mod";
    subPais.className = "bienvenida";
    subPais.innerText = "Ordenar!"
    darPista.className = "bienvenida";
    darPista.innerText = "Pista";
    subPais.style.margin = "7px";
    subPais.style.padding = "4px";
    inputPais.className = "entradaLetra";
    document.body.append(ordenados);
    document.body.appendChild(paisito);
    document.body.appendChild(inputPais);
    document.body.appendChild(subPais);
    document.body.appendChild(darPista);
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
  darPista.addEventListener('click', (e) => {
    Swal.fire(pais.pista);
  })};
