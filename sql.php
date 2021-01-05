
<?php
/*
// Tout selectionner d'une table
SELECT * FROM nom_table;
// Selectionner 3 colonnes d'une table
SELECT colonne1, colonne2, colonne 3 FROM nom_table;
// changer le nom d'une colonne de la table
SELECT nom_col1 as "Nom1", nom_col2 'Nom2', nom_col3 Nom3, nom_col4 as "Nom4" FROM nom_table;
//realiser une opération
SELECT nom_col1, nom_col2, (nom_col3/20)*100 "Résultat" FROM nom_table;
// fusionner deux collonnes en une
SELECT CONCAT(nom_col1 , ' ', nom_col2) FROM nom_table;
//effacer les doublons
SELECT DISTINCT nom_col1 FROM nom_table;
// selectionner avec une condition
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 >= 6;
// chiffre plus grand que 
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 BETWEEN 10 AND 20;
// chiffre entre deux chiffre 
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 IN (10, 20, 30);
// colonne comprenant des chiffres
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 IN ('mot1', 'mot2', 'mot3');
// colonne comprenant des mots
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 LIKE 'm%';
// commence par une lettre 
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 NOT LIKE 'm%';
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 NOT IN (4, 6, 8);
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 NOT BETWEEN 10 AND 20;
// ... ou pas... 
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 IS NULL;

SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 LIKE 'c%' AND nom_col1 >= 10;
// AND permet de combiner plusieurs conditions 
SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 LIKE 'c%' OR nom_col1 >= 10;

SELECT nom_col1, nom_col2 FROM nom_table WHERE nom_col2 LIKE 'c%' ORDER BY nom_col1 ASC;
// pour classer par ordre chronologique 
SELECT nom_col1, nom_col2 as 'Résultat' FROM nom_table WHERE nom_col2 LIKE 'c%' ORDER BY nom_col1, 'Résultat' DESC;
// ... et inverse ... 

// FONCTIONS sur des NOMBRES 

MIN() Donner la valeur minimale d’une colonne MIN(year_result)
MAX() Donner la valeur maximale d’une colonne MAX(birth_date)
COUNT() Donner le nombre de lignes d’une colonne COUNT(first_name)
AVG() Donne la moyenne d’une colonne AVG(year_result)
SUM() Donne la somme d’une colonne SUM(year_result)
ROUND(N,[D]) Arrondit un nombre au nombre de décimale
indiquée
ROUND(4.87, 1)
TRUNCATE(N, D) Coupe un nombre au nombre de décimale TRUNCATE(4.17, 1)
//Fonctions sur des dates 
DAY() Donne le jour d’une date DAY(birth_date)
MONTH() Donne le mois d’une date MONTH(birth_date)
YEAR() Donne l’année d’une date YEAR(birth_date)
NOW() Donne date et heure actuelles NOW()
//Fonctions sur des caractères 
LENGTH() Donne la longueur d’une chaine de caractères LENGTH(last_name)
UPPER() Donne une chaine de caractères en majuscule UPPER(first_name)
LOWER() Donne une chaine de caractères en minuscule LOWER(first_name)
LEFT() Donne les X caractères à partir de la gauche LEFT(first_name, X)
RIGHT() Donne les X caractères à partir de la droite RIGHT(first_name, 4)
SUBSTRING() Découpe un chaine de caractères à partir de X
dont la taille est Y
SUBSTRING(first_name, X, Y)
*/
?>
