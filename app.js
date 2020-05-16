//variables
var nombre='Sara';
console.log(nombre);
var edad=34;
console.log(edad);
var sueldo=1999.99;
console.log(sueldo);

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(sueldo));
//para comentarios de una línea

/*para
comentarios de 
varias líneas*/

//OPERADORES MATEMÁTICOS +,-,*,/

var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;
edadAna=34;
edadMaria=28;
yearActual=2019;

diferenciaEdad= edadAna-edadMaria;
sumaEdades=edadAna+edadMaria;
yearAna=yearActual-edadAna;
yearMaria=yearActual-edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log("Año en que nació Ana: "+yearAna);
console.log("Año en que nació María: "+yearMaria);

//Operadores lógicos, unarios y de asignación
//Lógicos <> <= >= ==

var mayorAna =edadAna > edadMaria;
console.log(mayorAna);

var mayorAna =!(edadAna > edadMaria);
console.log(mayorAna);

//Operadores unarios, ++Incremento, --Decremento
edadAna++;
console.log(edadAna);
console.log(edadAna++);
console.log(edadAna);
console.log(++edadAna);

//Operadores de asignación, +=, -=, *=, /=, %=
var a=12;
var b=5;

var c=a%5;//Residuo o resto de una división
console.log(c);
a=a+b;
a+=b;
console.log(a);

//SENTENCIAS CONDICIONALES IF...ELSE
//EJECUTA UNA SENTENCIA SI UNA CONDICIÓN ES EVALUADA COMO VERDADERA. PUEDE EJECUTAR OTRA SENTENCIA SI LA CONDICIÓN ES EVALUADA COMO FALSA
//if (condicion) {sentencia1} else {sentencia2}

var nombre='Sara';
var esCasado=true;
if (esCasado==true){
    console.log(nombre+' es casado.');
} else{
    console.log(nombre+'es soltero');
}

edadAna=14;
edadMaria=28;

if (edadAna>edadMaria){
    console.log("Ana es mayor que María");
} else {console.log("Maria es mayor que Ana");}

/*SENTENCIAS IF ANIDADAS NOT,AND & OR
AND (&&) TRUE SI TODO ES TRUE
OR (II) TRUE SI UNO ES TRUE
NOT(!) INVIERTE TRUE/FALSE*/

var nombre='sara ';
var edad=61;

//edad<=12 es un niño
//edad>12 y <=18, es un adolescente
//edad >19 y <=60, es un adulto
//edad es >60 es un anciano

if (edad<=12){
    console.log(nombre+'es una niña');
} else if((edad>12)&&(edad<=18)){
    console.log(nombre+'es una adolescente');
} else if ((edad>18)&&(edad<=60)){
    console.log(nombre+'es una adulta');
} else {console.log (nombre+ 'es una anciana');}

//SENTENCIA SWITCH
//Evalúa el valor de una variable con diferentes casos de posibles valores que puede tener esa variable en un tiempo determinado

var mes=3;
switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    default:
        console.log('Mes no encontrado');
}

//SENTENCIA FOR es una sentencia repetitiva o condicional. Permite interacciones de un bloque de código de acuerdo a una cantidad de veces.
//Crea un bucle que consiste en tres expresiones opcionales, po lo que están entre corchetes y se separan de puntos y comas seguidos de una sentencia ejecutada en un bucle
//for([expresión-inicial];[condición];[expresión-final]){sentencia}

console.log(1);
console.log(2);
console.log(3);
console.log(4);

for (var i=1;i<=10; i+=2){
    console.log(i);
}

for (var i=10;i>=1; i--){
    console.log(i);
}

for (var i=5;i<=25; i+=5){
    console.log(i);
}

//SENTENCIA WHILE Y DO...WHILE

var i=1;
while(i<=10){
    console.log(i);
    i++;
}

//SENTENCIA DO...WHILE. Nos permite hacer alguna interacción.
console.log('sara');
var i=1;
do{
    console.log(i);
    i++;
}while(i>=10);

//ejercicio 1

var numero1=5;
var numero2=8;

if(numero1<=numero2) { 
    console.log("numero1 no es mayor que numero2");
 } 
if(numero2>=0) {
      console.log("numero2 es positivo");
} 
if((numero1<0) || (numero1!=0)) { 
    console.log("numero1 es negativo o distinto de cero");
} 
if(++numero1<numero2) { 
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"); 
}

//Ejercicio 2

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var numero= 51179973;
console.log(numero/23);
var resto=numero%23;
console.log(resto);

var numero=51179973;
var letra='A';

if ((numero<0)||(numero>99999999)){
    console.log('El número proporcionado no es válido');
}else if (letra==letras[numero%23]){
    console.log('El número y la letra del DNI son correctos');
}else{console.log('La letra que ha indicado no es correcta');}


console.log(letras[numero%23]);
console.log(letra);

var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)"); 
letra = letra.toUpperCase();
if ((numero<0)||(numero>99999999)){
    alert('El número proporcionado no es válido');
}else if (letra==letras[numero%23]){
    alert('El número y la letra del DNI son correctos');
}else{alert('La letra que ha indicado no es correcta');}

//Ejercicio 3

var nota= prompt ("Escribe tu nota (en número)");
if ((nota>=0)||(nota<=3)){
    console.log('Muy deficiente');
}if ((nota>3)||(nota<=5)){
    console.log('Insuficiente');
}if ((nota>5)||(nota<=7)){
    console.log('Bien');
}