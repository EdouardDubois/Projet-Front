
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
  bouger: null,

  /*---------------------- Propriétés pour le mouvement ----------------------*/

  vx: 0,
  vy: 0,
  dir: 2,
  speed: 6,

  /*--------------------- Propriétés pour les collisions ---------------------*/

  ligne: 0,
  colonne: 0,
  lignePre: 0,
  colonnePre: 0,
  yPre : 540,

  /*****************************************************************************
  *************************** Définition des méthodes **************************
  *****************************************************************************/

  changementTrajectoire: function(horizontal,effet = 0){
    if (horizontal == true) {
      this.dir = (Math.PI)-this.dir;

    } else {

      if(effet != 0){
        var nouvelAngle = effet - this.dir% (2 * Math.PI);

        if (nouvelAngle > - 0.8 && nouvelAngle < 1) {
          nouvelAngle = - 0.8;
        }

        if (nouvelAngle > Math.PI - 1 && nouvelAngle < Math.PI + 0.8) {
          nouvelAngle = Math.PI + 0.8;
        }
        this.dir = nouvelAngle;
      } else {
        this.dir = -this.dir;
      }

      console.log(this.dir + "Effet : " + effet);
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
      if(this.yPre < 550){
        var effet = (this.x - palet.x - 128)/128;
        this.changementTrajectoire(false,effet);
      } else {
        this.changementTrajectoire(true);
      }
    }
    this.yPre = this.y;
    console.log(this.yPre);
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
    this.stop();
    this.x = 463;
    this.y = 540;
    this.yPre = 540;
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
    },

    stop: function(){
      window.clearInterval(this.bouger);
      this.bouger = null;
      this.div.style.display = "none";
    }

  }
