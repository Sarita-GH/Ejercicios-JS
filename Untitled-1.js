/*Ejercicio 3

var nota= prompt ("Escribe tu nota (en número)");
if ((nota>=0)&&(nota<=3)){
    console.log('Muy deficiente');
}if ((nota>3)&&(nota<=5)){
    console.log('Insuficiente');
}if ((nota>5)&&(nota<=7)){
    console.log('Bien');
}*/

//Ejercicio 4
var frase= prompt('Escriba una frase');
var resultadoA=0;
var resultadoE=0;
var resultadoI=0;
var resultadoO=0;
var resultadoU=0;

frase.toLowerCase()
for (var inicio=0;inicio<frase.length;inicio++){
    var letra=frase[inicio]
    switch(letra){
        case 'a':
            resultadoA+=1;
        break;
        case 'e':
            resultadoE+=1
        break;
        case 'i':
        case 'í':
            resultadoI+=1
        break;
        case 'o':
            resultadoO+=1
        break;
        case 'u':
            resultadoU+=1
        break;
    
    }
}
console.log(resultadoA, resultadoE, resultadoI, resultadoO, resultadoU)


/*Ejercicio 5 
var numero= prompt('Escribe un número');
resto=numero%2;
if (resto==0){
    console.log('El número es divisible entre 2');
}*/
