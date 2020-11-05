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
  afficherTeddyInfo(resp);
  produit=resp;
})

// ajouter info produit dans l'html---------------------------------------------
function afficherTeddyInfo(teddy){

const container = document.getElementById("teddycontainer");

const div = document.createElement("div");
div.className="image";

//image des ours
  const image=document.createElement("img");
  image.src=teddy.imageUrl;
  image.className="imageSize"; //taille image des ours

//nom de l'ours
  const name=document.createElement("h3");
  name.textContent=teddy.name; 

//description de l'ours
  const description=document.createElement("h4");
  description.textContent=teddy.description;

//prix de l'ours
  const price=document.createElement("h3"); 
  price.textContent=teddy.price /100+ "€"; 

//Options couleurs
  const colors=document.createElement("select");
  colors.textContent=teddy.name;
// création d'une boucle For pour afficher la liste déroulante des couleurs
  for (var i = 0; i < teddy.colors.length; i++) {
  	const option=document.createElement("option");
  	option.textContent=teddy.colors[i];
  	colors.appendChild(option);
  }

//Options quantité
  const quantity=document.createElement("select");
  quantity.id='quantity';
  quantity.textContent=teddy.name;
// création d'une boucle For pour afficher la liste déroulante
  for (var i = 0; i < [1, 2, 3, 4, 5].length; i++) {
  	const option=document.createElement("option");
  	option.textContent=i+1;
  	quantity.appendChild(option);
  }

//-----sessionStorage--------------------------------------

// bouton Ajout au panier
    const ajoutPanier = document.createElement ("button");
    ajoutPanier.textContent = "Ajouter au panier";
    
    ajoutPanier.addEventListener('click',function(){
    	ajoutSessionStorage(produit)
    });

    //info du produit pour le storage
    function ajoutSessionStorage(data){
    	let objetTeddy={
    		_id: data._id,
    		image:data.imageUrl,
    		name: data.name,
    		colors: colors.value,
    		quantity: document.getElementById('quantity').value,
    		price: data.price,
    	}

    //
    let list_products = sessionStorage.getItem('list_products');
    if(list_products){
    	// Si un tableau existe deja le sessionStorage
    	let tab = JSON.parse(list_products);
    	tab.push(objetTeddy);//ajouter le produit dans le tableau
    	sessionStorage.setItem('list_products', JSON.stringify(tab));
    }else{
    	// sessionStorage est vide;
    	sessionStorage.setItem('list_products', JSON.stringify([objetTeddy]));
    }
    alert("Ajout de " + teddy.name + " à votre panier")


    }



  //DOM
  div.appendChild(image);
  div.appendChild(name);
  div.appendChild(description);
  div.appendChild(quantity);
  div.appendChild(colors);
  div.appendChild(price);
  div.appendChild(ajoutPanier);
  document.getElementById("product_teddy").appendChild(div);

}
