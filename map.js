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

var briquesRestantes = 0;

var chargerUneMap = function(mapChargee){

  // Reset le DOM
  var laBoite = document.querySelector("#boiteBrique");
  while (laBoite.firstChild) {
    laBoite.removeChild(laBoite.firstChild);
  }

  // Reset l'objet laMap
  laMap = vide;

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
}
