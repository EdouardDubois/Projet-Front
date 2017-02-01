
var UsineABrique =function (colonne,ligne,vie) {

  /*-------------------------- Liste des propriétés ----------------------------

  vie
  width
  height
  ligne
  colonne
  div

  ----------------------------- Liste des methodes -----------------------------

  placer
  animer
  toucher
  initier

  ******************************************************************************
  ************************** Définition des propriétés *************************
  *****************************************************************************/

  this.vie = vie;
  this.width = 75;
  this.height = 25;
  this.colonne = colonne;
  this.ligne = ligne;
  this.id = "brique"+this.colonne+"x"+this.ligne;
  this.div = "";

  /*****************************************************************************
  *************************** Définition des méthodes **************************
  *****************************************************************************/

  // Cette méthode crée une div  avec une image dedans et la place dans le dom.
  // Elle leur donne leurs classes et leur position suivant les propriété de l'objet.
  // Enfin elle ajoute un Listener pour déclencher la fonction au toucher.

  this.placer = function(){
    var nouvelleBrique = document.createElement("div");
    var nouvelleImage = document.createElement("img");
    nouvelleBrique.appendChild(nouvelleImage);
    document.querySelector("#boiteBrique").appendChild(nouvelleBrique);
    nouvelleBrique.id = this.id;
    nouvelleImage.className = "blink";
    nouvelleImage.src = "img/blink.png"

    if (isNaN(this.vie)) {
      nouvelleBrique.className = "brique metal";
    } else {
      nouvelleBrique.className = "brique cassable pv"+this.vie;
    }

    nouvelleBrique.style.left = (this.colonne * this.width)+"px";
    nouvelleBrique.style.top = (this.ligne * this.height)+"px";
    this.div = document.getElementById(this.id);
  }

  // Animation quand le bloc est touché appelée par la methode .toucher

  this.animer = function(){
    this.div.children[0].style.top = "0px";
    var blinkAnimation = window.setInterval(function(){
      if (parseFloat(this.div.children[0].style.top) > -275) {
        this.div.children[0].style.top = (parseFloat(this.div.children[0].style.top) - 25)+"px";
      } else {
        clearInterval(blinkAnimation);
        this.div.children[0].style.top = "0px";
      }
    }.bind(this),20);
  }

  this.mourir = function(){
    document.querySelector("#boiteBrique").removeChild(this.div);
    briquesRestantes--;
    if (briquesRestantes == 0) {
      victoire();
    }
  }

  // Quand le bloc est touché il :
  // 1) s'anime
  // 2) Perd de la vie (s'il est cassable) et modifie sa classe suivant sa vie.
  // 3) Vérifie qu'il lui reste de la vie, sinon il se supprime.

  this.toucher = function(){
    this.animer();
    if (!isNaN(this.vie)) {
      this.vie = this.vie -1;
      this.div.className = "brique cassable pv"+(this.vie);
      if ((this.vie) <= 0) {
        this.mourir();
      }
    }
  }
}
