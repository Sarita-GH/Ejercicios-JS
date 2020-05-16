/*function sumaLista (array){
  var tam=array.lenght
  var sumar=0
  for(var i=tam; i>0; i--){
    sumar+=array[i-1]
  }
  return sumar
}

var lista=[2,3,6,8,6,8,7]
sumaLista(lista)*/

/*function mensaje(){
  console.log ('esto es un mensaje');
}

mensaje();

function mensaje(msj){
  console.log (msj);
}
var msj= 'mensaje como argumento de la función'
mensaje(msj);

function sumar (a,b,c){
  return a+b+c;
}

var resultado= sumar (4,5,8);
console.log (resultado);*/

//funciones recursivas//
var factorial=function(n){
  if((n==0) || (n==1))
    return 1;
  else
    return (n*factorial (n-1));
}

4=1*2*3*4=24
5=1*2*3*4*5=120
console.log(factorial(5));
5*4 4*3 3*2 2*1