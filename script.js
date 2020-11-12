console.log("toto");
console.error("erreur!");
/*réservé pour les messages d'erreur*/
alert();
/*pop-up*/
document.write();
/* va écrire un message à la place du HTML*/
window.print();
/*pour faire une impression*/

//DECLARATION DE VARIABLES
var a;
var x, y, z;
var x = "value";
var objet = {};
var arrayListe = [];
var objets = [{}, [], function() {}];
var empty = [undefined, null];


//ACCES aux éléments du DOM
document.getElementById("")
document.getElementsByClassName("")
document.getElementsByTagName("")
document.querySelector("") 
/*va chercher le premier du genre*/
var listItems = document.querySelectorAll("li");
/*va chercher tous du genre et retourne une Nodeliste*/
var newDiv = document.createElement("div");
/*lorsqu'on veut créer un nouvelle balise*/

newDiv.innerText = "toto";
/*retournerale texte sans les balises*/
totoEl.innerHTML = "<span>coucou</span>";
bodyEl.addEventListener("mouseover"/"click"/"", function () {});
body.appendChild(newDiv);

element.children
/*retournera l'enfant direct*/
element.parentElement
/*retournera le parent direct*/
element.nextElementSibling  /  element.previousElementSibling
/*retournera l'element suivant ou précédent*/

document.getElementById("demo").innerHTML = "My First JavaScript";
/*pour écrire dans le HTML de la section  avec id 'demo'*/

typeof(variable);
/*renvoie le type de la variable*/
var longueurDeLaVariable = variable.length;

//CONDITIONS
    if (condition1) {
    } else if (condition2){ 
    } else {
      }
    ;

    switch(expression) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    };

    while (condition) {
      // code block to be executed
    };

    for (var i = 0; i < 5; i++) {
      text += "The number is " + i + "<br>";
    };

    for (x of ojets) {
    };
    /*boucle sur les éléments d'un objet*/

    for (x in person) {
      text += person[x];
    }
   /*boucle sur les propriétés d'un objet*/
    break;
    /*termine un switch ou une loop*/
    continue;
   /*sort de la boucle et reprend au dessus/*

    /*avec les opérateurs de comparaison
    ===    égal
    ==      vaut
    !          contraire de
    !==   n'est pas égal
    !=       ne vaut pas
    >    Supérieur à
    >=  Supérieur ou égal à
    <    Inférieur à 
    <=  Inférieur ou égal à

    pour résoudre des équation booléenne
    &&     "et" logique
    ||     "ou inclusif" (ou / et) logique 
  */

//FUNCTION
function nomDeLaFonction (argument1, argument2,argument3){
var nouvelleVariableResultat = actionsARealiser;
return nouvelleVariableResultat;
}
/*
function (a,b,c){}
(a,b,c) =>{}
ce sont deux façons d'écrire une fonction*/

setTimeout(function () {
  alert("28 secondes plus tard..")
}, 28000);

var intId = setInterval(function () {
  alert("Toutes les secondes");
}, 1000);
// pour définir qqch qui se fait à intrevals fixe
clearInverval(intId);
// pour arreter qqch qui se fait à intrevals fixe

/*fonction avec try et catch*/
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
//STOCKAGE LOCAL
localStorage.setItem("nomDeClé", "valeur");
/*pour sauver et enregistrer*/
localStorage.getItem("nomCeClé");
/* pour retrouver et charger*/

// sur ARRAY
arr1.push("toto");
/* pour ajouter élément à la fin. retourne la nouvelle longuer*/
arr1.unshift("Lemon","Pineapple");
/* pour ajouter des éléments au début. retourne la nouvelle longuer*/
arr1.forEach(function(){}); 
/* pour itérer*/
arr1.concat(arr2);
/* pour combiner*/
arr1.includes("toto");
/* pour vérifier l'existence d'un élément*/
arr1.map(function(){});
/* pour transformer tous les elements d'un array*/
arr1.filter(function(){});
/* pour filtrer*/
arr1.reduce(function(){});
/* pour "réduire"*/
slice(start, end);
/* retourne un array réduit de la position start à la pos end non compris*/
array.splice(index, howmany, item1, itemX)
/* rajoute/enleve elements d'un array, et retourne les elements enlevés
element.prototype.propriete = valeur;
/* prototype permet de rjouter une nouvelle proeitété à un objet/array existant*/
arr1.filter(fonction)
/* renvoie un array des éléments qui ont passé trueà la condition*/
arr1.pop();
/* retourne et enleve le dernier element d'un array */
arr1.shift();
/* retourne et enleve le premier element d'un array */
arr1.sort();
/* pour tier par ordre alphabetique ou numéral */
fruits.reverse();
/* pour tier par ordre alphabetique inversé */
points.sort(function(a, b){return b-a});
/* pour tier par ordre numéral descendant */
arr1.toString();
/* prend les différents element pour en faire un string */

// DATE
 date();
 /* date d'ajd*/
 displayDate();
 getDate(),getDay(),getFullYear(), etc.
 Date.now()
 /* retourne ,le no° de millisecondes de puis 1971 */
 Date.parse("March 21, 2012")
 /*millisecondes entre le 21 mars et 1971*/
 toDateString()
 /* transfome la date en string lisible */
 new Date().toLocaleDateString();
 /*renvoie le format jj/mm/yyyy*/
 new Date().toLocaleTimeString();
  /*renvoie le format hh:mm:ss */
 new Date().valueOf();
 /* renvoie le temps en millisecondes

// METHODES SUR STRING
autresExeptions.includes(mot);	
/*pour voir si un mot se trouve dans une liste*/
substring(start, end)
/* retourne une string réduite de la position start à la pos end non compris*/
substr(start, length)
/* retourne une string réduite de la position start de la longuer définie*/
var IndexPositionDuMotdansUnePhrase = str.indexOf("mot");
/*Il existe une fonction search() quasi identique*/
var IndexdeLaDernierePositionDunMotdansUnePhrase = str.lastIndexOf("mot");
/*indexOf(), and lastIndexOf() return -1 if the text is not found*/
str.indexOf("motLocalise",15);
/*permet de rajouter un index à partir du quel le comptage se fera*/
str.charAt(position);
/*retourne la lettre à cette position*/
str.endsWith("mot");
str.startsWith("mot")
/* retourne un booleen. Vrai si la phrase termine/commence avec le mot défini*/
str.includes(searchvalue, start);
/* retourne un booleen. Vrai si la phrase contient un mot défini*/
str.repeat(n);
/* repete la string n */
str.replace("mot1", "mot2");
/* remplzce le mot1 par le mot2 d'une string*/
str.search("mot");
/* renvoie la position du mot... Si c'est -1 c'est qu'il nexist pas */
str.split(" ")
/* renvoie un array de tous les mots délimités par un espace */
str.toLowerCase();
str.toUpperCase();
str.trim()
/* enlève les espaces blancs de part et d'autres d'un mot*/
parseFloat();
/* trasnforme un nombre en string vers un nombre type number */
parseInt();
/* trasnforme un nombre en string vers un entier type number */

// METHODES SUR NOMBRE
chiffre.toString();	
/*poue transormer un chiffre en string*/
(nombre).toFixed(x);	
/*défini le nombre de décimales (x) d'un nombre mais le transforme en string*/	
Math.random();
/*retourne une valeur entre 0 et 1*/
Math.round();
/* arrondi vers un entier*/
Math.floor(); Math.trunc()
/* arrondi vers l'entier du bas*/
Number.isInteger();
/* renvoie un boolen pour confirmer que nombre est un entier */
Number.isNaN();
num.toExponential();
num.toString();
Math.max(5, 10);
Math.min(5, 10);
/* renvoie le plus grand/petit nombre*/

// DATA
JSON.parse();
/*transformer des données string en un array JS*/	
JSON.stringify()
/*transformer un array JS en données string*/	 
	


