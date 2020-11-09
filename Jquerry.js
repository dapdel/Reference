import $ from 'jquery';
//cdn Jquerry à intégrer dan le HTML s'il n'y a pas d'utilisation de parcel:
<script src="https://code.jquery.com/jquery-3.5.1.js" 
integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" 
crossorigin="anonymous"></script>
// CRUD element
// -- READ element
var elementsTotos = $('.toto');
console.log(elementsTotos.html());
var elementsDivers = $('p, div, button');
console.log(elementsTotos.text());
// bonus
var x = document.querySelector('h1');
$(x).css('color');

// -- CREATE element
var newElement = $('<div id="titi">bonjour</div>');
$('body').append(newElement);
$('body').prepend(elementsTotos);
var clonedElement = newElement.clone();

// -- UPDATE element
$('body').html(elementsDivers);

// -- DELETE element
newElement.remove();
$('body').empty();

// CRUD attribut
$('body').attr('title', 'ceci est le body');
console.log($('body').attr('title'));
$('img').attr({
  src: 'toto.jpg',
  alt: 'ceci est un totto',
});
$('body').removeAttr('title');

// CRUD class
$('body').addClass('superclass');
$('body').removeClass('superclass');
console.log($('body').hasClass('superclass'));
$('body').toggleClass('superclass');

// CRUD styles
$('body').css('color', 'red');
console.log($('body').css('color'));
$('img').css({
  border: '1px solid black',
  width: '200px',
});

// animation
$('img').hide();
$('img').show();
$('img').fadeOut(400); // ça disparaît
$('img').fadeIn(400); // ça apparaît
$('img').animate({ width: '1000px' }, 4000, 'swing', function () {
  console.log('toto');
}); // ne marche pas avec "transform"

// event
$('body').on('click', function (e) {
  $(this).css('background-color', 'red');
  $(e.currentTarget).css('background-color', 'red');
});
$('body').one('click', function (e) {