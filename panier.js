// alerte si le panier est vide
  let panier = sessionStorage.getItem('panier');
  panier = JSON.parse(panier);
  var total = sessionStorage.getItem('prixTotal');
if (panier == null || total == 0){
  alert("Votre panier est vide, vous ne pouvez pas passer commande !")
 }  
