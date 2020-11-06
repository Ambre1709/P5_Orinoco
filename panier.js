//récup de l'id de l'url---------------------------------------------
function getId(){
	const param = window.location.search
	const id = param.replace("?id=","") //récup uniquement de l'id
	return id
}
let produit;
//localhost ------------------------------------------------------------------
fetch ("http://localhost:3000/api/teddies/" + getId())
.then(response => response.json())
.then(resp => {
  console.log(resp);
  createCart(resp);//------cette ligne est correct?
  produit=resp;
})



// alerte si le panier est vide---------------------------à modifier
//let panier = sessionStorage.getItem('panier');
//panier = JSON.parse(panier);
//if (panier === null){
//	alert("Votre panier est vide, vous ne pouvez pas passer commande !")
//}  

//-----------------------------------------------------------------------------------------------------------------------------------------

//permet d'afficher les produits
function imageTeddy(produit, id, url) {
    let image = document.createElement('img');
    image.className = `image_${id}`;
    image.src=url;
    produit.appendChild(image);
}

//Nom du Teddy
function nameTeddy(parent, txt) {
    let nom = document.createElement('h4');
    let contenu = document.createTextNode(txt);
    parent.appendChild(nom);
    nom.appendChild(contenu);
}

//Couleur 
function colorTeddy(parent, color) {
    let couleur = document.createElement('p');
    let contenu = document.createTextNode(`Couleur : ${color}`);//pour que la variable soit affiché et exécuté en temps que texte ${color}`
    parent.appendChild(couleur);
    couleur.appendChild(contenu);
}

//Quantité
function quantityTeddy(parent, quantity) {
    let quantite = document.createElement('p');
    quantite.className = 'quantity';
    let contenu = document.createTextNode(`Quantité : ${quantity}`);
    parent.appendChild(quantite);
    quantite.appendChild(contenu);
}

//Prix total de l'ourson en fonction de la quantitée
function priceTeddy(produit, id, txt) {
    let price = document.createElement('p');
    price.className = `price_${id}`;
    let contenu = document.createTextNode(`Prix Total : ${txt} €`);
    produit.appendChild(price);
    price.appendChild(contenu);
}

//Bouton pour supprimer un article----------------------ne marche pas
function btnRemoveItems(parent) {
    let btnRemove = document.createElement('button');
    let contents = document.createTextNode('Supprimer');
    parent.appendChild(btnRemove);//affiche le bouton
    btnRemove.appendChild(contents); //affiche "supprimer"
}

//fonction permettant de supprimer l'article
function emptyCart(produit) {
    window.sessionStorage.removeItem(produit); 
 }


function totalPriceOrder() {//--------------------------------à faire
//for each
}



//Récapitulatif des produits stockés dans le Storage
function createCart() {

    //Panier
    let panier = document.getElementById('content_table');

    //boucle qui reccup les keys du Panier
    for (let keys of Object.keys(sessionStorage)) {

        //On reprend toute les couleurs commandées d'un produit 
        for (let product of JSON.parse(sessionStorage[keys])) {

            //variables
            let produit = document.createElement("article")
            let div = document.createElement('div')
            //multiplier le prix par la quantitée
            let totalPrice = product.price /100 * product.quantity

            //Ajout au DOM
            panier.appendChild(produit)
            imageTeddy(produit, product.id, product.image)

            produit.appendChild(div)
            nameTeddy(div, product.name)
            colorTeddy(div, product.colors)
            quantityTeddy(div, product.quantity)
            priceTeddy(div, product.id, totalPrice)

            //Bouton pour supprimer l'article du sessionStorage
            btnRemoveItems(produit, keys)
        }
    }
}