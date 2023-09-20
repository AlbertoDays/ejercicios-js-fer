/**Ejercicios para esta sesion 
* Declara una funcion para cada problema planteado 
*
*Calcular el perimetro de un circulo*/

//Funcion con nombre
const pi=3.141594;
function calcularPerimetroCirculo(radio){        
    let perimetroCirculo = 2*pi*radio;    
    console.log("El perimetro calculado es de:"+ perimetroCirculo+ "metros" );
}

    //Funcion flecha
    const perimetroCirculo = (radio) => console.log("El perimetro del circulo es " + 2*pi*radio+"metros");
 
  
//Calcular el area de un rectangulo

    //Funcion con nombre
    function calcularAreaRectangulo(lado,altura){    
    let areaRectangulo = lado*altura;
    console.log("El area calculado es de"+areaRectangulo+"metros" );
}

    //Funcion flecha
    const areaRectangulo = (lado,altura) => console.log("El area del rectangulo es" + lado*altura+"metros");
 

//Calcular el cuadrado de un numero

    //Funcion con nombre
    function cuadradoDeNumero(numero){    
    let cuadradoNum = numero*numero;
    console.log("El cuadrado del numero es:"+cuadradoNum);
}

    //Funcion flecha
    const cuadradoDeNum = (numero) => console.log("El cuadrado del numero es"+numero*numero);

//Calcular la conversion de grados celsius a farenheit

//Funcion con nombre
function conversionGrados(gradosCelsius){    
    let gradosFarenheit = (gradosCelsius*9/5)+32;
    console.log("Los grados Farenheit son:"+gradosFarenheit);
}

    //Funcion flecha
    const conversionGradosF = (gradosCel) => console.log("Los grados Farenheit son:"+(gradosCel*9/5)+32);


//Calcular el valor del voltaje dadas la resistencia y la corriente

    //Funcion con nombre    
    function calcularVoltaje(resistencia,corriente){    
    let voltaje = resistencia*corriente;
    console.log("El voltaje es:"+voltaje);
}

    //Funcion flecha
    const calcVoltaje = (resistencia,corriente) => console.log("El voltaje es:"+resistencia*corriente);


//calcular el volumen de una esfera

    //Funcion con nombre
    function calcularVolEsfera(radio){    
    let volEsfera = 4/3*pi*(radio*radio*radio)
    console.log("El volumen de la esfera es:"+volEsfera);
}
    //Funcion flecha
    const calcVolEsfera = (radio) => console.log("El volumen de la esfera es:"+4/3*pi*(radio*radio*radio));



  
  
  
 /** CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

