//barre de navigation responsive --------------------------------------------
$(document).ready(function(){
  $('#icon').click(function(){
    $('ul').toggleClass('active');
  });
})
//localhost ------------------------------------------------------------------
fetch ("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(resp => {
  console.log(resp)
  for (let i = 0; i < resp.length; i++) {
    afficherTeddy(resp[i])
  }
})
//page acceuil index ---------------------------------------------------------
function afficherTeddy(teddy){

  const divIndex=document.createElement("div")
  divIndex.className="image"

  const aIndex=document.createElement("a")
  aIndex.href="produit.html?id=" + teddy._id 

  const imageIndex=document.createElement("img") //image des ours
  imageIndex.src=teddy.imageUrl //image des ours
  imageIndex.className="imageSize" //taille image des ours

  const nameIndex=document.createElement("h3") //nom de l'ours
  nameIndex.textContent=teddy.name //nom de l'ours

  const priceIndex=document.createElement("h3") //prix de l'ours
  priceIndex.textContent=teddy.price /100 + "€" //prix de l'ours


  aIndex.appendChild(imageIndex)
  divIndex.appendChild(aIndex)
  divIndex.appendChild(nameIndex)
  divIndex.appendChild(priceIndex)
  document.getElementById("list_teddy").appendChild(divIndex)
}