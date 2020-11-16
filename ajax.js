// pour CHERCHER des données:
$.ajax('http://localhost:3000/nom_du_fichier').then(function (data) {};
//est identique à 
$.get('http://localhost:3000/nom_du_fichier').then(function (data) {};
//est identique à :
$.ajax({
    url:'http://localhost:3000/nom_du_fichier',
    methode:'GET'}).then(function (data) {});

// pour CHANGER des données:   
$.ajax({
    method: 'PATCH',
    url: `http://localhost:3000/bds/0`,
    data: {
      like: true,
    },
});

// pour CHANGER des données:   
$.ajax({
    method: 'PUT',
    url: `http://localhost:3000/bds/0`,
    data: {
      like: true,
    },
});

// pour EFFACER des données:   
$.ajax({
    method: 'DELETE',
    url: `http://localhost:3000/bds/0`,
    data: {
      like: true,
    },
});

// pour ENVOYER des données (s'après un formulaire par ex):   
$.ajax({
    method: 'POST',
    url: `http://localhost:3000/bds/0`,
    data: {
      like: true,
    },
});