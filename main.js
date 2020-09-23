//barre de navigation responsive
$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('active');
  });

//bouton scrolltotop de la page d'acceuil, pas encore paramètré CSS
  $('#btnScrollToTop').click(function(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:"smooth"
    });
  });
});


