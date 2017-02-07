var laMap = [
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
];

var mapActuelle = "";

var briquesRestantes = 0;

var niveauxFinis = 0;

var resetLeNiveau = function(){
  var laBoite = document.querySelector("#boiteBrique");
  while (laBoite.firstChild) {
    laBoite.removeChild(laBoite.firstChild);
  };
  laMap = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
  ];
  briquesRestantes = 0;
}

var chargerUneMap = function(mapChargee){

  for (var y = 0; y < mapChargee.length; y++) {
    for (var x = 0; x < mapChargee[y].length; x++) {
      if (mapChargee[y][x] != 0) {
        laMap[y][x] = new UsineABrique(x,y,mapChargee[y][x]);
        laMap[y][x].placer();
        if (!isNaN(mapChargee[y][x])) {
          briquesRestantes++;
        }
      }
    }
  }

  window.document.querySelector("#but").style.display = "block";
  window.document.querySelector("#but").addEventListener("click", function(){
    window.document.querySelector("#but").style.display = "none";
    window.document.querySelector("#controle").style.display = "block";
    window.document.querySelector("#controle").addEventListener("click", function(){
      window.document.querySelector("#controle").style.display = "none";
      palet.setup(); // lancement de l'animation du palet.
      balle.setup(); // lancement de l'animation de la balle.
    });
  });
}
