function getId() {
  const param = window.location.search
  const id = param.replace("?OrderId=", "") //récup uniquement de l'id
  return id
}

function commandeId() {

  let div = document.getElementById('commande');
  let titre = document.createElement('h3');
  let nomTitre = document.createTextNode('Confirmation de commande');
  div.appendChild(titre);
  titre.appendChild(nomTitre);
  //
  let div2 = document.createElement('p');
  let contenu = document.createTextNode(`N° de commande : ${getId()}`);
  div.appendChild(div2);
  div2.appendChild(contenu);
  //
  sessionStorage.clear();
}
commandeId()

//barre de navigation responsive --------------------------------------------
$(document).ready(function() {
  $('#icon').click(function() {
    $('ul').toggleClass('active');
  });
})