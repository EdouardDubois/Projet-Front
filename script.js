/*******************************************************************************
******************************** Initialisation ********************************
*******************************************************************************/

palet.setup(); // lancement de l'animation du palet.
balle.setup(); // lancement de l'animation de la balle.
chargerUneMap(niveau1);

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
    window.clearInterval(palet.deplacementGauche); // J'arrête le déplacement
    palet.deplacementGauche = false; // Je reset ma variable pour pouvoir se redéplacer plus tard
    break;

    case 39:
    window.clearInterval(palet.deplacementDroite);
    palet.deplacementDroite = false;
    break;

  }
}

/*----------------------------- Quand on gagne -------------------------------*/

var victoire = function(){
  console.log("Bravo tu es un winner !");
}
