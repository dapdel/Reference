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
var objects = [{}, [], function() {}];
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
bodyEl.addEventListener("mouseover", function () {});
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
localStorage.getItem("nomCeClé")
/* pour retrouver et charger*/

//METHODES SUR STRING

//METHODES SOR NOMBRE


var longueurDeLaVarialeTxt = txt.length;
var IndexPositionDuMotdansUnePhrase = str.indexOf("mot");
/*Il existe une fonction search() quasi identique*/
var IndexdeLaDernierePositionDunMotdansUnePhrase = str.lastIndexOf("mot");
/*indexOf(), and lastIndexOf() return -1 if the text is not found*/
var pos = str.indexOf("locate",15);
/*la fonction index permet de rajouter un index à partir du quel le comptage se fera

slice(start, end)
substring(start, end)
substr(start, length)
*/

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

