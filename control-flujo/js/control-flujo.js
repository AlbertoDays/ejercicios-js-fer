// Ejercicios para esta sesion
/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else

Ejercicio 1*/

//let edad=prompt("Ingrese su edad");
//edad=parseInt(edad)

function ingresarEdad(edad){
    
if(edad >= 18){
    console.log("Usted tiene edad suficiente para votar");

}else{
    console.log("Usted no tiene edad suficiente para votar");

}
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 */

/**let calificacionUno=prompt("Ingrese calificacion uno");
datoUno=parseInt(calificacionUno)
let calificacionDos=prompt("Ingrese calificacion dos");
datoDos=parseInt(calificacionDos)
let calificacionTres=prompt("Ingrese calificacion tres");
datoTres=parseInt(calificacionTres)
let calificacionCuatro=prompt("Ingrese calificacion cuatro");
datoCuatro=parseInt(calificacionCuatro)
let promedio=(datoUno+datoDos+datoTres+datoCuatro)/4;
*/

function calificaciones(cal1,cal2,cal3,cal4){  
    var suma=cal1+cal2+cal3+cal4;
    var promedio=suma/4;
    
    if (promedio >=7){
        console.log("Aprobado");
    }else {
        console.log("Reprobado");
    }
}  


/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function numPrimo(numero){  
    if (numero <=1){
        return ("No es primo");
    }
    if (numero <=3){
        return ("Es primo");
    }
    for (var i =2; i<= Math.sqrt(numero); i++){
        if (numero % i===0){
            return ("No es primo"); 
        }
    }    
    return ("Es primo");
}



/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso*/

function divisible1(numDiv1){
    
    if(numDiv1 % 7 ===0 && numDiv1 % 8 === 0){
        return true
    }
    else{
        return false;
    
    }
    }
 
 /** Colocar calificaciones de manera que vayan del 0 al 10
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 * Ejercicio 4*/

 function ordenarNum(){
    var numerosLit= [56,7,8,0,224,73];
    numerosLit.sort(function(a,b) {
        return a-b;
    });
    return numerosLit;
 }

 var numerosOrdenados=ordenarNum();
 console.log (numerosOrdenados);


 

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 * Ejercicio 5*/

function divisible2(numDiv2){
    
    if(numDiv2 % 4 ===0 ||numDiv2 % 9 === 0){
        return true
    }
    else{
        return false;
    
    }
    }

 
  
/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 *Ejercicio 6*/

function calculadora(num1,operacion,num2,){
    
    switch (operacion){
        case '+'|| "suma": 
            console.log(num1+num2);
            break;
        case '-'||"resta":
            console.log(num1-num2);
            break;
        case '*'||"multiplicacion" : 
            console.log(num1*num2);
            break;
        case '/'||"division":
            if (num2 !==0){                
            console.log(num1/num2);
            }else{
                console.log("Division por 0 no permitida")
            }
            break;
        default :
            console.log("operacion invalida");
            break;
    }
}



/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 * Ejercicio 7*/

function generoPelicula(generoPel){
    generoPel = generoPel.toUpperCase();
    generoPel = generoPel.toLowerCase();
    switch (generoPel){
        case "accion" : 
            console.log("John Wick Saga");
            break;
        case "drama" :
            console.log("Siempre a tu lado(Hachiko)");
            break;
        case "comedia" : 
            console.log("Jim Carrey Movies");
            break;
        case "romance" :
            console.log("Titanic");
            break;
        case "suspenso" : 
            console.log("Salvaje");
            break;
        case "terror" :
            console.log("it");
            break;        
        default :
            console.log("Sin recomendaciones");
            break;
    }
}

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 *Ejercicio 8*/

function cajero(actividad){
    actividad = actividad.toUpperCase();
    actividad = actividad.toLowerCase();
    switch (actividad){
        case "retiro" : 
            console.log("Cantidad a retirar...");
            console.log("Contando...");
            console.log("¡Retiro exitoso!");
            break;
        case "transferencia" :
            console.log("Cuanta a transferir 568525");
            console.log("Validando cantidad...");
            console.log("validando fondos...");
            console.log("¡transferencia exitosa!");           
            break;
        case "deposito" : 
        console.log("Usted va a depositar $500");
        console.log("Inserte billetes");
        console.log("contando...");
        console.log("¡Deposito realizado!");
            break;
        case "pago de servicios" :
            console.log("Servicios IZZI,Totalplay;Telmex");   
            console.log("TotalPlay seleccionado");
            console.log("Cuenta 02154862");
            console.log("Transaccion en progreso...");
            console.log("¡Operacion exitosa!");         
            break;        
        default :
            console.log("¡Operacion Invalida!");
            break;
    }
}




/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 *Ejercicio 9*/

    var tasasDeCambio={
        peso:1,
        dolar:0.0586,
        euro:0.0548,
        yen:8.6565,
        libra:0.047,
        franco:0.0526 
    };

    function convertirDivisa(num,divisa){
    
        switch (divisa){
            case "dolares": 
                console.log(num*0.0586);
                break;
            case "euro":
                console.log(num*0.0548);
                break;
            case "yen": 
                console.log(num*8.6565);
                break;
            case "libras": 
                console.log(num*0.047);
                break;
            case "francos": 
                console.log(num*0.0526);
                break;                
            default :
                console.log("Divisa no valida");
                break;
        }
    }
    
/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 *Ejercicio 10*/

function descuento(precio,cupon)
{
    var cuponValido=("CH32");
    var descuentoCupon = 0.1;    
    if (cupon===cuponValido){
        var descuentoAplicado=precio*descuentoCupon;
        var nuevoPrecio= precio-descuentoAplicado;
        return nuevoPrecio;      

    }else{
        console.log("cupon invalido");

    }
}
