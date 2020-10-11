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

fetch ("http://localhost:3000/api/teddies")
.then(response => response.json())
.then(resp => {
  console.log(resp)
  for (let i = 0; i < resp.length; i++) {
    afficherTeddy(resp[i])
  }
})
//page acceuil
function afficherTeddy(teddy){
  let divIndex=document.createElement("div")
  divIndex.className="image"
  let aIndex=document.createElement("a")
  aIndex.href="produit.html"
  let imageIndex=document.createElement("img")
  imageIndex.src=teddy.imageUrl
  imageIndex.className="imageSize"
  aIndex.appendChild(imageIndex)
  divIndex.appendChild(aIndex)
  let nameIndex=document.createElement("h3")
  nameIndex.textContent=teddy.name
   let priceIndex=document.createElement("h3")
  priceIndex.textContent=teddy.price
  divIndex.appendChild(nameIndex)
  divIndex.appendChild(priceIndex)
  document.getElementById("list_teddy").appendChild(divIndex)


}


