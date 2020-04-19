function repeatTest(){
  display(50);
  console.log("Titre de la page : " +document.title);
  console.log("Type de contenu de la page : "+ document.body)
  console.log("La troisième bande annonce est" + document.links[2])
  display(50);
  console.log("le titre "+ document.getElementsByClassName("un")[0].innerHTML+" est de type : " + document.getElementById("48"));
  display(50);
  console.log("Notre page contient "+document.getElementsByTagName("p").length+" paragraphes et "+document.images.length+" images");
  display(50);
  console.log(" Notre page contient "+ document.getElementsByClassName("SYNOPSIS").length);
  display(50);
  console.log("La première rubrique des films date de l'année "+document.getElementById("2014").innerHTML);
  console.log("Il existe "+document.getElementsByClassName("film").length+" sous la rubrique " +document.getElementById("2016").innerHTML);
  display(50);
  console.log("Synopsis du film : " + document.querySelector(".game").innerHTML+ ":" );
  console.log(document.querySelector(".maths").innerHTML );
  display(50);

}