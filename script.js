console.log("toto");
var indIA= document.getElementById("IA").value;
btn.addEventListener("click",function(){
    if (mot1H != "chat") {
      document.getElementById("retour").innerHTML = "Dommage, c'est raté";
      //console.log("raté!");
    } else if (mot3V != "auto"){ 
      document.getElementById("retour").innerHTML = "pas de chance!";
    } else {
      document.getElementById("retour").innerHTML = "bravo, c'est réussi!";}
    });