var calculadora;
$(function(){

 calculadora = new Calculadora();

 var arrayNumeros = [];
 var limpiar = true;
 var mostrarResultado = false;


 var salida = document.getElementById("salida");

 $("#igual").click(ejecutar);
 $('#sumar').click(ejecutar);
 $('#restar').click(ejecutar);
 $('#dividir').click(ejecutar);
 $('#multiplicar').click(ejecutar);
 $("#limpiar").click(ejecutar);
 $('#punto').click(ejecutar);

 for(var numero = 0; numero < 10; numero++){
  arrayNumeros[numero] = document.getElementById(numero.toString());
  arrayNumeros[numero].addEventListener('click',ejecutar);
}
});


function ejecutar(e){
    var operador;
    let elemento = e.target;

    if(elemento.value == '+' || elemento.value == '-' || elemento.value == '*' || elemento.value == '/'){
       if(operador && !limpiar && !mostrarResultado){
        resultado();
    }
    operacion(elemento);
}else{
  switch(elemento.value){
    case '.':
    if(!(salida.value).match(/\./)){
      salida.value += '.';
      limpiar = false;
  }
  break;
  case 'C':
  calculadora.borrar(salida);
  limpiar = true;
  break;
  case '=':
  resultado();
  break;
  default:
  mostrarPantalla(elemento);
}
}
};

function resultado(){
  salida.value = calculadora.operar(operador,salida.value);
  calculadora.setMemoria(salida.value);
  mostrarResultado = true;
};
function operacion(elemento){
  calculadora.setMemoria(salida.value);
  operador = elemento.value;
  limpiar = true;
  mostrarResultado = false;
};
function mostrarPantalla(elemento){
  if(limpiar){
    salida.value = elemento.value;
    limpiar = false;
}else{
   salida.value += elemento.value;
}
};
