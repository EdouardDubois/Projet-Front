
/*--------------------------------- Critical -----------------------------------

Changer le rayon de la balle

------------------------------------ Major -------------------------------------

Niveaux angles métal

Pré-loader les images

------------------------------------ Minor -------------------------------------

Cleaner le code et séparer les fichiers

Commenter le code

*/

/*******************************************************************************
******************************** Initialisation ********************************
*******************************************************************************/

window.document.querySelector("#splashscreen").addEventListener("click",function(){
  var imgSplash = window.document.querySelector("#imgSplashscreen");
  imgSplash.style.top = "0px";
  window.setTimeout(function(){
    window.document.querySelector("#imgTitre").style.display = "block";
  },300);
  var disparition = window.setInterval(function(){
    if (parseFloat(imgSplash.style.top) > -900) {
      imgSplash.style.top = (parseFloat(imgSplash.style.top) - 25)+"px";
    } else {
      clearInterval(disparition);
      window.document.querySelector("#splashscreen").style.display = "none";
    }
  },10);
  startGame();
});


var startGame = function(){

  window.document.querySelector("#boitePalet").style.display = "block";
  window.document.querySelector("#niveau1").addEventListener("click",function(){
    window.document.querySelector("#levelSelect").style.display = "none";
    chargerUneMap(niveau1);
    mapActuelle = "niveau1";

  });
  window.document.querySelector("#niveau2").addEventListener("click",function(){
    window.document.querySelector("#levelSelect").style.display = "none";
    chargerUneMap(niveau2);
    mapActuelle = "niveau2";

  });
  window.document.querySelector("#niveau3").addEventListener("click",function(){
    window.document.querySelector("#levelSelect").style.display = "none";
    chargerUneMap(niveau3);
    mapActuelle = "niveau3";

  });
}

/*******************************************************************************
********************************* Keybindings **********************************
********************************************************************************

------------------------------ Quand on appuie -------------------------------*/

window.onkeydown = function(event){
  var code = event.keyCode;
  switch(code){

    case 37:// Appuyer sur la touche Gauche
    palet.versLaGauche();
    break;

    case 39:// Appuyer sur la touche Droite
    palet.versLaDroite();
    break;

    case 13:
    console.log("feu !");
    break;

  }
}

/*---------------------------- Quand on relâche ------------------------------*/

window.onkeyup = function(event){
  switch (event.keyCode) {

    case 37:
    if (palet.deplacementGauche != "bloque") {
      window.clearInterval(palet.deplacementGauche); // J'arrête le déplacement
      palet.deplacementGauche = false; // Je reset ma variable pour pouvoir se redéplacer plus tard
    }
    break;

    case 39:
    if (palet.deplacementGauche != "bloque") {
      window.clearInterval(palet.deplacementDroite);
      palet.deplacementDroite = false;
    }
    break;

  }
}

/*------------------------- Quand on gagne ou perd ---------------------------*/

var victoire = function(){

  niveauxFinis ++;
  if (niveauxFinis >= 1) {
    window.document.querySelector("#leCV").style.backgroundImage = "url('img/cv.png')";
    window.document.querySelector("#leCV").href = "https://www.linkedin.com/in/edouard-dubois-15548b84";
  }
  if (niveauxFinis >= 3) {
    window.document.querySelector("#github").style.backgroundImage = "url('img/github.png')";
    window.document.querySelector("#github").href = "https://github.com/EdouardDubois/Projet-Front";
  }

  switch (mapActuelle) {
    case "niveau1":
    window.document.querySelector("#niveau1").style.backgroundImage = "url('img/niveau1_alt.png')";
    break;
    case "niveau2":
    window.document.querySelector("#niveau2").style.backgroundImage = "url('img/niveau2_alt.png')";
    break;
    case "niveau3":
    window.document.querySelector("#niveau3").style.backgroundImage = "url('img/niveau3_alt.png')";
    break;
    default:
  }
  window.document.querySelector("#ecranFin").style.backgroundImage = "url('img/victoire.png')";
  finir();
}

var defaite = function(){
  window.document.querySelector("#ecranFin").style.backgroundImage = "url('img/defaite.png')";
  finir();
}

var finir = function(){
  window.document.querySelector("#ecranFin").style.display = "block";
  balle.stop();
  palet.stop();
  window.document.querySelector("#ecranFin").addEventListener("click",function(){
    resetLeNiveau();
    window.document.querySelector("#ecranFin").style.display = "none";
    window.document.querySelector("#levelSelect").style.display = "block";
  });
}
