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

var mapActuelle = "aucune";

var briquesRestantes = 0;

var niveauxFinis = 0;

var chargerUneMap = function(mapChargee){

  mapActuelle = mapChargee;

  // ****************************** Reset le DOM *******************************
  var laBoite = document.querySelector("#boiteBrique");
  while (laBoite.firstChild) {
    laBoite.removeChild(laBoite.firstChild);
  }

  // Reset l'objet laMap
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

  // Reset le compteur de briques restantes
  briquesRestantes = 0;

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
