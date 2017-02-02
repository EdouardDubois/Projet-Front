
var balle = {

  /*-------------------------- Liste des propriétés ----------------------------

  x
  y
  rayon
  div
  vx
  vy
  dir
  speed
  bouger

  ----------------------------- Liste des methodes -----------------------------

  changementTrajectoire
  verifCollisionMurs
  verifCollisionBrique
  setup

  ******************************************************************************
  ************************** Définition des propriétés *************************
  *****************************************************************************/

  x: 463,
  y: 540,
  rayon: 13,
  couleur: "#e1c048",
  div: window.document.querySelector("#balle"),
  bouger: false,

  /*---------------------- Propriétés pour le mouvement ----------------------*/

  vx: 0,
  vy: 0,
  dir: 2,
  speed: 5,

  /*--------------------- Propriétés pour les collisions ---------------------*/

  ligne: 0,
  colonne: 0,
  lignePre: 0,
  colonnePre: 0,

  /*****************************************************************************
  *************************** Définition des méthodes **************************
  *****************************************************************************/

  changementTrajectoire: function(horizontal,effet = 0){
    if (horizontal == true) {
      this.dir = (Math.PI)-this.dir;
    } else {
      this.dir = -(this.dir);
    }
    this.vx = Math.cos(this.dir)*this.speed;
    this.vy = Math.sin(this.dir)*this.speed;
  },

  verifCollisionMurs: function(){
    if (this.x <= 26 || this.x >= 900) {
      this.changementTrajectoire(true);
    }
    if (this.y <= 26) {
      this.changementTrajectoire(false);
    }
    if (this.y >= 580) {
      palet.changementVie(-15);
      this.changementTrajectoire(false);
      var cadreAlt = document.querySelector("#cadreAlt").style;
      cadreAlt.opacity = 1;
      disparitionAlt = window.setInterval(function(){
        if (cadreAlt.opacity > 0) {
          cadreAlt.opacity = cadreAlt.opacity - 0.05;
        } else {
          clearInterval(disparitionAlt);
        }
      }.bind(this),80);
    }
  },

  verifCollisionPalet: function(){
    if (this.y >= 550 && this.x >= palet.x && this.x <= palet.x + 256) {
      this.changementTrajectoire(false);
    }
  },

  verifCollisionBrique: function(){
    if (this.ligne != Math.trunc((this.y - 63)/25) || this.colonne != Math.trunc((this.x - 13)/75)) {
      this.lignePre = this.ligne;
      this.colonnePre = this.colonne;
    }
    this.ligne = Math.trunc((this.y - 63)/25);
    this.colonne = Math.trunc((this.x - 13)/75);
    if (this.ligne >= 0 && this.ligne <= 7) {

      if (laMap[this.ligne][this.colonne] != 0) {
        if(this.ligne == this.lignePre){
          this.changementTrajectoire(true);
        } else {
          this.changementTrajectoire(false);
        }
        laMap[this.ligne][this.colonne].toucher();
        if (laMap[this.ligne][this.colonne].vie <= 0) {
          laMap[this.ligne][this.colonne] = 0;
        }
      }
    }
  },

  setup: function(){
    this.x = 463;
    this.y = 540;
    this.div.style.backgroundColor = this.couleur;
    this.changementTrajectoire(false);

    this.bouger = window.setInterval(
      function(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.verifCollisionMurs();
        this.verifCollisionBrique();
        this.verifCollisionPalet();
      }.bind(this),10);
      this.div.style.display = "block";
    }
  }
