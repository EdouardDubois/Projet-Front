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
      imgSplash.style.top = (parseFloat(imgSplash.style.top) - 15)+"px";
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
  window.document.querySelector("#menu").style.backgroundImage = "url('img/victoire.png')";
  window.document.querySelector("#menu").style.display = "block";
  balle.stop();
  palet.stop();

  niveauxFinis ++;
  if (niveauxFinis >= 1) {
    window.document.querySelector("#leCV").style.backgroundImage = "url('img/cv.png')";
    window.document.querySelector("#leCV").href = "https://www.linkedin.com/in/edouard-dubois-15548b84";
  }
  if (niveauxFinis >= 3) {
    window.document.querySelector("#github").style.backgroundImage = "url('img/github.png')";
    window.document.querySelector("#github").href = "https://github.com/EdouardDubois/Projet-Front";
  }
  window.document.querySelector("#menu").addEventListener("click",function(){
    resetLeNiveau();
    window.document.querySelector("#menu").style.display = "none";
    window.document.querySelector("#levelSelect").style.display = "block";

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

  });
}

var defaite = function(){
  window.document.querySelector("#menu").style.backgroundImage = "url('img/defaite.png')";
  window.document.querySelector("#menu").style.display = "block";
  balle.stop();
  palet.stop();
  window.document.querySelector("#menu").addEventListener("click",function(){
    resetLeNiveau();
    window.document.querySelector("#menu").style.display = "none";
    window.document.querySelector("#levelSelect").style.display = "block";
  });
}
