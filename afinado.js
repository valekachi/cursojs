// // // Función que nos dice si una nota está afinada. Decimos esto cuando la frecuencia de una nota es de 440Hz.
//  function estaAfinado() {
//  let ingresarFrecuencia = Number(prompt("Ingrese la frecuencia de la nota"));
//  let frecuenciaLaCentral = 440;
//  if (ingresarFrecuencia == frecuenciaLaCentral) {
//     alert("Está afinado");
// } else if  (ingresarFrecuencia >= 437 && ingresarFrecuencia <= 443) {
//     alert("Está cerca de estar afinado, pero la frecuencia aún no llega a 440.");
// } else {
//     alert("La frecuencia está fuera del rango de aproximación a la afinación. Cambie la frecuencia y vuelva a intentarlo.")
// }
// }
        
// estaAfinado();
//  ////////////////////////////////////////////////////////////
// let colorIngresado  = prompt("Traduce al inglés la palabra 'rojo'");
// function traduceRojo() {
// while(colorIngresado != "red"){
//     alert("Tu traducción fue '"+ colorIngresado+ "'. Incorrecto");
//     colorIngresado = prompt("Ingresar nuevamente");
// }
// alert("Correcto! Felicitaciones.");
// }
// traduceRojo();
// ////FUNCIÓN PARA SABER CON QUÉ NOTAS ESTAN COMPUESTOS LOS ACORDES MAYORES //
 //let acorde = prompt("Ingrese un acorde mayor en minúsculas")
//  function saberNotasDe(acorde) {
//      switch (acorde) {
//          case "do":
//              return "Las notas que componen al acorde son: DO, MI, SOL";
//              break;
//          case "re":
//              return "Las notas que componen al acorde son: RE, FA, LA";
//              break;
//          case "mi":
//              return "Las notas que componen al acorde son: MI, SOL, SI";
//              break;
//          case "fa":
//              return "Las notas que componen al acorde son: FA, LA, DO";
//              break;
//          case "sol":
//              return "Las notas que componen al acorde son: SOL, SI, RE";
//          case "la":
//              return "Las notas que componen al acorde son: LA, DO, MI";
//          case "si":
//              return "Las notas que componen al acorde son: SI, RE, FA";
//          default:
//              return "Dato inválido. Ingrese un acorde mayor (do, re, mi, fa, sol, la, si)";
//              break;
//      }
//  }
// }
// alert(saberNotasDe(acorde));
// acorde = prompt("Si lo desea, escriba otro acorde");
// alert(saberNotasDe(acorde));

// console.log(saberNotasDe(acorde));



const notasMusicales = ["DO","RE","MI","FA","SOL","LA","SI"];
console.log( notasMusicales.join(" / "));
const cifradoAmericano = ["C", "D", "E", "F", "G", "A", "B"];
console.log(cifradoAmericano.join(" / "));




const escalasMayores = [
  {nombreEscalaMayor: "Do", escala: "DO, RE, MI, FA, SOL, LA, SI, DO"},
  {nombreEscalaMayor: "Re", escala: "RE, MI, FA#, SOL, LA, SI, DO#, RE"},
  {nombreEscalaMayor: "Mi", escala: "MI, FA#, SOL#, LA, SI, DO#, RE#, MI"},
  {nombreEscalaMayor: "Fa", escala: "FA, SOL, LA, SIb, DO, RE, MI, FA"},
  {nombreEscalaMayor: "Sol", escala: "SOL, LA, SI, DO, RE, MI, FA#, SOL"},
  {nombreEscalaMayor: "La", escala: "LA, SI, DO#, RE, MI, FA#, SOL#, LA"},
  {nombreEscalaMayor: "Si", escala: "SI, DO#, RE#, MI, FA#, SOL#, LA#, SI"}
]
for (const escala of escalasMayores) {
alert(escala);
}


console.log(escalasMayores);

const escalasMenores = [
  {nombreEscalaMenor: "DOm", escala: "DO, RE, MIb, FA, SOL, LAb, SIb, DO"},
  {nombreEscalaMenor: "REm", escala: "RE, MI, FA, SOL, LA, SIb, DO, RE"},
  {nombreEscalaMenor: "MIm", escala: "MI, FA#, SOL, LA, SI, DO, RE, MI"},
  {nombreEscalaMenor: "FAm", escala: "FA, SOL, LAb, SIb, DO, REb, MIb, FA"},
  {nombreEscalaMenor: "SOLm", escala: "SOL, LA, SIb, DO, RE, MIb, FA, SOL"},
  {nombreEscalaMenor: "LAm", escala: "LA, SI, DO, RE, MI, FA, SOL, LA"},
  {nombreEscalaMenor: "SIm", escala: "SI, DO#, RE, MI, FA#, SOL, LA, SI"}
]
console.log(escalasMenores);


  let escalasMayoresyMenores = escalasMayores.concat(escalasMenores);
console.log(escalasMayoresyMenores);

const escalaMenorMayorDo = [
  escalasMayores[0],
  escalasMenores[0]
]
console.log(escalaMenorMayorDo);

const escalaMenorMayorRe = [
  escalasMayores[1],
  escalasMenores[1]
]
console.log(escalaMenorMayorRe);

const escalaMenorMayorMi = [
  escalasMayores[2],
  escalasMenores[2]
]
console.log(escalaMenorMayorMi);

const escalaMenorMayorFa = [
  escalasMayores[3],
  escalasMenores[3]
]
console.log(escalaMenorMayorFa);

const escalaMenorMayorSol = [
  escalasMayores[4],
  escalasMenores[4]
]
console.log(escalaMenorMayorSol);

const escalaMenorMayorLa = [
  escalasMayores[5],
  escalasMenores[5]
]
console.log(escalaMenorMayorLa);

const escalaMenorMayorSi = [
  escalasMayores[6],
  escalasMenores[6]
]
console.log(escalaMenorMayorSi);


////IGNORAR EL SIGUIENTE CÓDIGO, ESTOY TRABAJANDO EN ÉL!///

//construir un programa que tome como parametro una escala mayor y devuelva su escala o tonalidad relativa menor
// DO mayor debería devolver LAm.
//  let acordeMayor = prompt("Ingresa una nota mayor para saber su escala relativa menor")
//  function relativaMenor(acordeMayor) {
//  for (const escala of escalasMenores) {
//    alert(escalasMenores[5]);
//  }
//  }

//  relativaMenor();


















// EJERCICIO EN CLASE
// const elementosIniciales = [
//     {nombre: "Daniel", edad: 32},
//     {nombre: "Martina", edad: 7},
//     {nombre: "Karen", edad: 23},
//     {nombre: "Amelia", edad: 2}
//   ]
//   elementosIniciales.shift();
//   console.log(elementosIniciales);


//   const elementoAgregar = [
//     {nombre: "Felipe", edad: 36},
//     {nombre: "Julieta", edad: 7},
//     {nombre: "Edgar", edad: 66}
//   ]
//   elementoAgregar.pop();
//   console.log(elementoAgregar);
  //
//   let elementosFinales = elementosIniciales.concat(elementoAgregar);
//   console.log(elementosFinales);
//   elementosFinales.reverse();
//   console.log(elementosFinales);
