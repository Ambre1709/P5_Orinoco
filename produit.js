//récup de l'id de l'url---------------------------------------------
function getId(){
	const param = window.location.search
	const id = param.replace("?id=","") //récup uniquement de l'id
	return id
}

//localhost ------------------------------------------------------------------
fetch ("http://localhost:3000/api/teddies/" + getId())
.then(response => response.json())
.then(resp => {
  console.log(resp)
  afficherTeddyInfo(resp)
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

//Options couleurs
  const colors=document.createElement("select");
  colors.textContent=teddy.name;
// création d'une boucle For pour afficher la liste déroulante des couleurs
  for (var i = 0; i < teddy.colors.length; i++) {
  	const option=document.createElement("option");
  	option.textContent=teddy.colors[i];
  	colors.appendChild(option);
  }





//Choix de la quantité commandé//----------------------------------------a faire, selectionner une quantité avant ajout au panier
    const quantity = document.createElement("input")

  const price=document.createElement("h3"); //prix de l'ours
  price.textContent=teddy.price + "€"; 




//-------------------------------------------------------------------------------comment transferer le produit dans le sessionstorage?

// bouton Ajout au panier
    const ajoutPanier = document.createElement ("button");
    ajoutPanier.textContent = "Ajouter au panier";
    
    ajoutPanier.addEventListener('click',function(){
    	ajoutSessionStorage()//----data is not defined
    });

    function ajoutSessionStorage(){
    	let objetTeddy={
    		_id: data._id,//----data is not defined
    		image:data.imageUrl,
    		name: data.name,
    		colors: colors.value,
    		quantity: 1,
    		price: data.price,
    	}



    }




    ajoutPanier.addEventListener("click", function() {
        alert("Ajout de " + teddy.name + " à votre panier")
      







//----------------------------------------------------------------------------------------------------------------------------------------
})
  
  div.appendChild(image);
  div.appendChild(name);
  div.appendChild(description);
  div.appendChild(colors);
  div.appendChild(price);
  div.appendChild(ajoutPanier);
  document.getElementById("product_teddy").appendChild(div);

}
