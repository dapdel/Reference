

//DECLARATION DE VARIABLES
var a;
var x, y, z;
var x = bool/"string"/number;
var objet = {key1: "valeur", key2:number, key3:bool};
var arrayListe = [];
var objects = [{}, [], function() {}];
var empty = [undefined, null];

<<<<<<< HEAD
//MESSAGE DANS CONSOLE
console.log("toto");
console.log (z[index]);
console.error("erreur!");


/*réservé pour les messages d'erreur*/
alert();
/*pop-up*/
document.write();
/* va écrire un message à la place du HTML*/
window.print();
/*pour faire une impression*/

=======
>>>>>>> f8b267143adce6eb805e7474ff210a19771a7f1f
/*pour une string*///Accédez aux éléments du DOM
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector() 
document.querySelectorAll() 
/*permet de faire une recherche complexe dans le DOM, en mélangeant plusieurs procédés*/
	element.children
/*retournera l'enfant direct*/
element.parentElement
/*retournera le parent direct*/
element.nextElementSibling  /  element.previousElementSibling
/*retournera l'element suivant ou précédent*/

document.getElementById("demo").innerHTML = "My First JavaScript";
/*pour écrire dans le HTML*/

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

for (i = 0; i < 5; i++) {
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

var longueurDeLaVarialeTxt = txt.length;
var IndexPositionDuMotdansUnePhrase = str.indexOf("mot");
/*Il existe une fonction search() quasi identique*/
var IndexdeLaDernierePositionDunMotdansUnePhrase = str.lastIndexOf("mot");
/*indexOf(), and lastIndexOf() return -1 if the text is not found*/
var pos = str.indexOf("locate",15);
/*la fonction index permet de rajouter un index ) partir du quel le colmptage se fera*/

chiffre.toString()
/*poue transormer un chiffre en string*/
autresExeptions.includes(mot);
/*pour voir si un mot se trouve dans une liste*/

(nombre).toFixed(x);
/*défini le nombre de décimales (x) d'un nombre*/


slice(start, end);
substring(start, end);
/*va chercher les parties de la string comprises entre les deux indices*/
substr(start, length);
split


arr1.push("toto");
/* pour ajouter*/
arr1.forEach(function(){}); 
/* pour itérer*/
arr1.concat(arr2);
/* pour combiner*/
arr1.includes("toto");
/* pour vérifier l'existence d'un élément*/
arr1.map(function(){});
/* pour transformer*/
arr1.filter(function(){});
/* pour filtrer*/
arr1.reduce(function(){});
/* pour "réduire"*/
 date();
 /* date d'ajd*/
 displayDate();

