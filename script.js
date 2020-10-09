console.log("toto");
// console.erreur ?
//DECLARATION DE VARIABLES
var a;
var x = "value";
var objet = {};
var arrayListe = [];
var objects = [{}, [], function() {}];
var empty = [undefined, null];


/*pour une string*///Accédez aux éléments du DOM
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector() 
/*permet de faire une recherche complexe dans le DOM, en mélangeant plusieurs procédés*/
	element.children
/*retournera l'enfant direct*/
element.parentElement
/*retournera le parent direct*/
element.nextElementSibling  /  element.previousElementSibling
/*retournera l'element suivant ou précédent*/

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
    ||          "ou inclusif" (ou / et) logique */

//FUNCTION
function nomDeLaFonction (argument1, argument2,argument3){
var nouvelleVariableResultat = actionsARealiser;
return nouvelleVariableResultat;
}

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
