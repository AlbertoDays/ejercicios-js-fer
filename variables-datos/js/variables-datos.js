/** Ejercicio para esta sesion
 * 
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 */

var nombree="Alberto";
var apellido="Diaz";
var nacionalidad= "Mexico";
var nombreEsposa = "Mabell";
var apellidoEsposa= "Narvaez";
var nombreHijoUno= "Nicolas";
var nombreHijoDos= "Oliver";
var nombreMascota= "Marshall";
var ciudadNatal= "Oaxaca"
var ciudadFavorita= "La Paz,B.C.S."

let age=29;
let heigt=170;
let widt= 80;
let edadEsposa=25;
let edadHijoUno= 8;
let edadHijoDos=7;
let cantidadBicis=4;
let cantidadCasas=52
let cantidadAutosCalle=40;
const usd = 18;

let esMayorDeEdad = true;
let haceFrio = False;
let tieneMascota = true;
let tienePareja = true;
let esMasculino =true;
let esNino= true;
let tieneGato=false;
let tieneAuto=false;
let viveSolo=false;
let esEstudiante=true;


 /** Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 */
let suma = age+edadEsposa
let resta= edadHijoUno-edadHijoDos
let multiplicacion= cantidadBicis*cantidadCasas
let division= cantidadAutosCalle/cantidadCasas
  
/* * Declarar variables que concatenen cadenas de texto
 *   -5 mensajes diferentes en pantalla, sin limite de palabras.
 */
let nombreCompleto=nombree+apellido
let nombreCompletoEsposa=nombreEsposa+apellidoEsposa
let perro=nombreMascota+apellido
let nombreHijoUnoCompleto=nombreHijoUno+apellidoEsposa
let nombreHijoDosCompleto=nombreHijoDos+apellido


 /** Declarar 5 variables y convertirlas a otro tipo de dato
 * 
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */

 
 //convertir de number a string
 let edadString= String(age);
 let autosString= String(cantidadAutosCalle);
 //convertir de string a number
 var nacionalidadNumber = Number (nacionalidad);
 var ciudadNatalNumber = Number (ciudadNatal);
 //convertir a boleano
 let ciudadBoleano = Boolean (ciudadFavorita);


