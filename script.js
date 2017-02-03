/*******************************************************************************
******************************** Initialisation ********************************
*******************************************************************************/

// chargerUneMap(niveau0);

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
  window.clearInterval(balle.bouger);
  balle.div.style.display = "none";
  window.clearInterval(palet.deplacementDroite);
  window.clearInterval(palet.deplacementGauche);
  palet.deplacementGauche = "bloque";
  palet.deplacementDroite = "bloque";
  niveauxFinis ++;
  if (niveauxFinis >= 1) {
    window.document.querySelector("#leCV").style.backgroundImage = "url('img/cv.png')";
    window.document.querySelector("#leCV").href = "https://www.linkedin.com/in/edouard-dubois-15548b84";
  }
  if (niveauxFinis >= 3) {
    window.document.querySelector("#github").style.backgroundImage = "url('img/github.png')";
    window.document.querySelector("#github").href = "https://github.com/EdouardDubois/Projet-Front";

  }
}

var defaite = function(){
  window.document.querySelector("#menu").style.display = "block";
  window.clearInterval(balle.bouger);
  balle.div.style.display = "none";
  window.clearInterval(palet.deplacementDroite);
  window.clearInterval(palet.deplacementGauche);
  palet.deplacementGauche = "bloque";
  palet.deplacementDroite = "bloque";
}
