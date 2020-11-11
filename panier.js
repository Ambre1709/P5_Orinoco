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

//Récapitulatif des produits stockés dans le Storage
function createCart() {

    //Panier
    let panier = document.getElementById('content_table');

    //boucle qui recupère les keys du Panier
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
            btnRemoveItems(produit, product)
        }
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------------
//Bouton pour supprimer un article
function btnRemoveItems(parent, product) {
    let btnRemove = document.createElement('button');
    let contents = document.createTextNode('Supprimer');
    btnRemove.addEventListener('click', function(){
    	deleteItemCart(product)
    })
    parent.appendChild(btnRemove);//affiche le bouton
    btnRemove.appendChild(contents); //affiche "supprimer"
}

//Supprimer l'article demandé
function deleteItemCart(product) {

    let cart = JSON.parse(sessionStorage.getItem('list_products'))//parse pour convertir sous forme de tableau
    for (let [index, item] of cart.entries()) {//entries renvoie un tableau de [key, value] paires.
        if (product.name === item.name && product.color === item.color) {
            cart.splice(index, 1)//splice permet de supprimer un élement du tableau
            sessionStorage.setItem('list_products', JSON.stringify(cart))//mettre a jour le sessionStorage apres la supression du produit
        }
    }
    window.location.reload()
}
