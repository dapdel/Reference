<?php
// DECARATION DE VRIABLE
$a = 5;
$b = false, 
$message = "Bonne journée" ;
const PI = 3.141592 ;
$tab = array() ;

/* METRE LE CONETNU D'UNE VRIBLE DANS LE HTML
    <?=$tableauInt?>
*/

$prenom = $_POST["prenom"];
$nom = $_POST["nom"];
$_GET["url"];
echo"Merci $prenom $nom ;-)";
 //PRIORITE DES OPERATOPNS
 /* **,(++,--),!,(*,/,%),(+,-,.),(==,!=,===,!==),&&,||,(=,+=,-=,*=,/=,**=),and,xor,or */

 if (conditions)
 {
  instructions;
 }
 else
 {
  instructions;
 }
 
 switch(variable)
 {
  case valeur :
  instructions;
  break;
  case valeur :
  instructions;
  break;
  default :
  instructions;
  break;
 }

 while (conditions)
{
 instructions;
}

do {
    instructions;
   } while (conditions); 

for($nombre =1; $nombre < count($tab); $nombre++)
{
echo 'Ceci est la ligne n°'.$nombre;
}

//FONCTIONS
function nom_de_la_fonction(parametres)
{
    instructions;  
    return  $resultat ;
}

$action = (empty($_POST['action'])) ? 'défaut' : $_POST['action'];
/* (condition) ? instructionTrue : instructionFalse */



/*< ?php
include("header.php") ;
include("footer.php") ;
?>*/
header('Location:index.php?section=afaire');
/* premte de rdiriger vers une autre page */
ob_start();
/* est énecessair lorsqu'o utilisela fct header, elle démarerra la temporiastion de sortie */
$_SESSION['nom'] = "valeur" ;

session_start();
/*pour commencer une session*/
$_SESSION['nom'] = "valeur" ;
session_destroy();
/*pour arreter une session*/

var_dump($maVariable) ;
/*pour affincher contenu et type d'une variable */
print_r($maVariable) ;
/* affiche juste le contenu*/
if(isset($_POST['nomChamp1'], $_POST['nomChamp2']))
{
// instructions
}
die;
exit("Erreur");
/* les actions de sortie peuvent prendre un message */

//INTERACTIONS AVEC BASES de DONNEES

// connexion avec la base de données avec PDO
$basededonnees = "mysql:host=localhost;dbname=nom_bd;charset=utf8";
$utilisateur = "login";/* "root" */
$motdepasse = "password"; /* "" */
$pdo = new PDO($basededonnees, $utilisateur, $motdepasse);
// sélection des données
$requete = "SELECT description, marque, pu FROM produits ";

$produits = $pdo->query($requete); /* Pour envoyer une requête à la base de données */
foreach($produits as $produit)
{
 echo $produit['description']." ";
 echo $produit['marque']." ";
 echo $produit['pu']." euros<br>";
}
/* affichage des données avec une nouvelle boucle « foreach » */
//selectionner
$requete = $pdo->prepare('
SELECT description, marque, pu
FROM produits
WHERE marque = :marque AND pu <= :prixmax');
$requete->execute(array(
'marque' => $_POST['marque'],
'prixmax' => $_POST['prix_max']
));
//supprimer
$requete = "DELETE FROM client WHERE nom = :nom && prenom =
:prenom";
$requete = $pdo->prepare($requete);
$requete->execute(array(
 ":nom" => $nomRecupere,
 ":prenom" => $prenomRecupere
));
//modifier
$requete = "UPDATE client
SET nom = :nom, prenom = :prenom
WHERE id=13";
$requete = $pdo->prepare($requete);
$requete->execute(array(
 ":nom" => $nomRecupere,
 ":prenom" => $prenomRecupere
));
//ajouter
$requete = " INSERT INTO client (nom, prenom) VALUES (:nom,
:prenom)";
$requete = $pdo->prepare($requete);
$requete->execute(array(
 ":nom" => $nomRecupere,
 ":prenom" => $prenomRecupere
));

//pour pouvoir voir les scss en action il faut mettre dans la console
    sass --watch public/css/style.scss public/css/style.css


?>