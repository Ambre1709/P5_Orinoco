
//récup de l'id de l'url
function getId(){
	const param = window.location.search
	const id = param.replace("?id=","") //récup uniquement de l'id
	return id
}

// ajouter info produit dans l'html
function afficherTeddyInfo(teddy){

const container = document.getElementById("teddycontainer")

const divTeddy = document.createElement("div")
divTeddy.className="image"

const imageTeddy=document.createElement("img") //image des ours
  imageTeddy.src=teddy.imageUrl //image des ours
  imageTeddy.className="imageSize" //taille image des ours

  const nameTeddy=document.createElement("h3") //nom de l'ours
  nameTeddy.textContent=teddy.name //nom de l'ours

  const descriptionTeddy=document.createElement("h4")
  descriptionTeddy.textContent=teddy.description

  const colors=document.createElement("h4")
  colorsTeddy.textContent=teddy.name

  const priceTeddy=document.createElement("h3") //prix de l'ours
  priceTeddy.textContent=teddy.price + "€" //prix de l'ours

}
