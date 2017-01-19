var map = [
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0],
];

var chargerUneMap = function(laMap){

  for (var y = 0; y < laMap.length; y++) {
    for (var x = 0; x < laMap[y].length; x++) {
      if (laMap[y][x] != 0) {
        map[y][x] = new UsineABrique(x,y,laMap[y][x]);
        map[y][x].placer();
      } else {
        if (map[y][x] != 0) {
          map[y][x].mourir();
          map[y][x] = 0;
        }
      }
    }
  }
}
