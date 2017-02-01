
var palet = {

  /*-------------------------- Liste des propriétés ----------------------------

  vie
  x
  vitessePalet
  deplacementGauche
  deplacementDroite

  ----------------------------- Liste des methodes -----------------------------

  setup
  changementVie
  versLaGauche
  versLaDroite

  ******************************************************************************
  ************************** Définition des propriétés *************************
  *****************************************************************************/

  boitePalet: window.document.querySelector("#boitePalet"),
  imgPalet: window.document.querySelector("#imgPalet"),
  imgVie: window.document.querySelector("#imgVie"),

  vie: 100, // On commence avec une barre de vie complète.
  x: 346, // par rapport à la gauche.
  vitessePalet: 4, // en px déplacé à chaque interval.
  deplacementGauche: false,
  deplacementDroite: false,

  /*****************************************************************************
  *************************** Définition des méthodes **************************
  ******************************************************************************

  ----------------------------- Animation du Palet -----------------------------
  Placer le palet et lancer une animation (Interval à 40ms) tous les 2 secondes (Interval à 2s).*/

  setup: function(){
    this.boitePalet.style.left = this.x + "px"; // positionnement du palet.
    window.setInterval(function(){
      this.imgPalet.style.top = "0px";
      var animationPalet = window.setInterval(function(){
        if (parseFloat(this.imgPalet.style.top) > -495) {
          this.imgPalet.style.top = (parseFloat(this.imgPalet.style.top) - 45)+"px";
        } else {
          clearInterval(animationPalet);
          this.imgPalet.style.top = "0px";
        }
      },40);
    },2000);
  },

  /*--------------------------- Changement de vie ------------------------------

  Cette fonction sera appelée en cas de changement de vie.
  L'interval sert à effectuer le changement progressivement et créer une animation.*/

  changementVie: function(quantite){
    var valeurFinale = parseFloat(this.vie) + quantite;
    if (valeurFinale > 100){
      valeurFinale = 100;
    }
    if (valeurFinale < 0){
      valeurFinale = 0;
    }
    var intervalPalet = window.setInterval(function(){
      if (this.vie > valeurFinale) {
        this.vie = this.vie - 1;
      }
      if (this.vie < valeurFinale) {
        this.vie = this.vie + 1;
      }
      if (this.vie == valeurFinale){
        clearInterval(intervalPalet);
        if (this.vie == 0) {
          defaite();
        }
      }
      this.imgVie.style.width = this.vie + "%";
      this.imgVie.style.backgroundColor = "rgb(" + (200 - (this.vie * 1.5)) + "," + ((this.vie * 1.5) + 50) + ",200)";
    }.bind(this),20);
  },

  /*------------------------- Déplacement du Palet ---------------------------*/

  versLaGauche: function(){
    if(this.deplacementGauche == false) {
      this.deplacementGauche = window.setInterval(
        function(){
          if(this.x > 26){
            this.x = this.x-this.vitessePalet;
            this.boitePalet.style.left = this.x + "px";
          }
        }.bind(this),10);
      }
    },

    versLaDroite: function(){
      if(this.deplacementDroite == false) {
        this.deplacementDroite = window.setInterval(
          function(){
            if(this.x < 670){
              this.x = this.x+this.vitessePalet;
              this.boitePalet.style.left = this.x + "px";
            }
          }.bind(this),10);
        }
      }
    }
