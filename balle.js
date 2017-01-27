
var balle = {

  /*-------------------------- Liste des propriétés ----------------------------



  ----------------------------- Liste des methodes -----------------------------


  ******************************************************************************
  ************************** Définition des propriétés *************************
  *****************************************************************************/

  x: 300,
  y: 300,
  vx: 0,
  vy: 0,
  dir:Math.PI,
  speed:5,
  div: window.document.querySelector("#balle"),

  /*****************************************************************************
  *************************** Définition des méthodes **************************
  *****************************************************************************/

  changementTrajectoire : function(nouvelleDir = 0){
    // this.dir = nouvelleDir;
    this.dir = (Math.PI)+this.dir;
    this.vx = Math.cos(this.dir)*this.speed;
    this.vy = Math.sin(this.dir)*this.speed;

    // A utiliser au rebond
    // this.dir = (Math.PI)/2+this.dir;

  },

  verifCollision : function(){
    if (this.x <= 26 || this.x >= 901) {
      this.changementTrajectoire();
    }
  },

  initierMouvement : function(){
    this.changementTrajectoire();
    this.bouger = window.setInterval(
      function(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.verifCollision();
      }.bind(this),10);
    }
  }
