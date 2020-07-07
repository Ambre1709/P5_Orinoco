

$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('active');
  });






  $('#btnScrollToTop').click(function(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:"smooth"
    });
  });
});
