// // Función que nos dice si una nota está afinada. Decimos esto cuando la frecuencia de una nota es de 440Hz.
 function estaAfinado() {
 let ingresarFrecuencia = Number(prompt("Ingrese la frecuencia de la nota"));
 let frecuenciaLaCentral = 440;
 if (ingresarFrecuencia == frecuenciaLaCentral) {
    alert("Está afinado");
} else if  (ingresarFrecuencia >= 437 && ingresarFrecuencia <= 443) {
    alert("Está cerca de estar afinado, pero la frecuencia aún no llega a 440.");
} else {
    alert("La frecuencia está fuera del rango de aproximación a la afinación. Cambie la frecuencia y vuelva a intentarlo.")
}
}
        
estaAfinado();
 ////////////////////////////////////////////////////////////
let colorIngresado  = prompt("Traduce al inglés la palabra 'rojo'");
function traduceRojo() {
while(colorIngresado != "red"){
    alert("Tu traducción fue '"+ colorIngresado+ "'. Incorrecto");
    colorIngresado = prompt("Ingresar nuevamente");
}
alert("Correcto! Felicitaciones.");
}
traduceRojo();
////FUNCIÓN PARA SABER CON QUÉ NOTAS ESTAN COMPUESTOS LOS ACORDES MAYORES //
acorde = prompt("Ingrese un acorde mayor en minúsculas")
function saberNotasDe(acorde) {
    switch (acorde) {
        case "do":
            return "Las notas que componen al acorde son: DO, MI, SOL";
            break;
        case "re":
            return "Las notas que componen al acorde son: RE, FA, LA";
            break;
        case "mi":
            return "Las notas que componen al acorde son: MI, SOL, SI";
            break;
        case "fa":
            return "Las notas que componen al acorde son: FA, LA, DO";
            break;
        case "sol":
            return "Las notas que componen al acorde son: SOL, SI, RE";
        case "la":
            return "Las notas que componen al acorde son: LA, DO, MI";
        case "si":
            return "Las notas que componen al acorde son: SI, RE, FA";
        default:
            return "Dato inválido. Ingrese un acorde mayor (do, re, mi, fa, sol, la, si)";
            break;
    }
    
}
alert(saberNotasDe(acorde));
acorde = prompt("Si lo desea, escriba otro acorde");
alert(saberNotasDe(acorde));

console.log(saberNotasDe(acorde));








