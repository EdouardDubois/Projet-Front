
var palet = {

  /*-------------------------- Liste des propriétés ----------------------------

  boitePalet
  imgPalet
  fondVie
  vie
  vitessePalet
  emplacementDepart
  deplacementGauche
  deplacementDroite

  ----------------------------- Liste des methodes -----------------------------

  animation
  changementVie
  versLaGauche
  versLaDroite

  ******************************************************************************
  ************************** Définition des propriétés *************************
  *****************************************************************************/

  boitePalet : window.document.getElementById("boitePalet"),
  imgPalet : window.document.getElementById("imgPalet"),
  imgVie : window.document.getElementById("imgVie"),

  //Valeurs de départ.
  vie : 100, // On commence avec une barre de vie complète.
  vitessePalet : "4px", // en px déplacé à chaque interval.
  emplacementDepart : "200px", // par rapport à la gauche.
  deplacementGauche : false,
  deplacementDroite : false,

  /*****************************************************************************
  *************************** Définition des méthodes **************************
  ******************************************************************************

  ----------------------------- Animation du Palet -----------------------------
  Je joue une animation (Interval à 40ms) tous les 2 secondes (Interval à 2s).*/

  animation : function(){
    window.setInterval(function(){
      this.imgPalet.style.top = "0px";
      var recharge = window.setInterval(function(){
        if (parseFloat(this.imgPalet.style.top) > -495) {
          this.imgPalet.style.top = (parseFloat(this.imgPalet.style.top) - 45)+"px";
        } else {
          clearInterval(recharge);
          this.imgPalet.style.top = "0px";
        }
      },40);
    },2000);
  },

  /*--------------------------- Changement de vie ------------------------------

  Cette fonction sera appelée en cas de changement de vie.
  L'interval sert à effectuer le changement progressivement et créer une animation.*/

  changementVie : function(quantite){
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
      }
      this.imgVie.style.width = this.vie + "%";
      this.imgVie.style.backgroundColor = "rgb(" + (250-(this.vie*2)) + "," + ((this.vie*2)+50) + ",50)";
    }.bind(this),20);
  },

  /*------------------------- Déplacement du Palet ---------------------------*/

  versLaGauche : function(){
    if(this.deplacementGauche == false) {
      this.deplacementGauche = window.setInterval(
        function(){
          if(parseFloat(this.boitePalet.style.left) > 26){
            this.boitePalet.style.left = (parseFloat(this.boitePalet.style.left)-parseFloat(this.vitessePalet))+"px";
          }
        }.bind(this),10);
      }
    },

    versLaDroite : function(){
      if(this.deplacementDroite == false) {
        this.deplacementDroite = window.setInterval(
          function(){
            if(parseFloat(this.boitePalet.style.left) < 670){
              this.boitePalet.style.left = (parseFloat(this.boitePalet.style.left)+parseFloat(this.vitessePalet))+"px";
            }
          }.bind(this),10);
        }
      }
    }
