const fs = require('fs');
let source = require('./achivments.json')

const SILVER_RANGE = 50
const GOLD_RANGE = 100

function writeToFile(toBePrinted, name="generated") {
  let nameOfFile = `./${name}`
  fs.writeFile(nameOfFile, toBePrinted, function(err) {
    if(err) {
      return console.log(err)
    }
    console.log("The file was saved!")
  });
}

function template(title, subtitle, points) {
  let border = "bronzie";
  if (parseInt(points, 10) >= GOLD_RANGE) {
    border = "goldie"
  } else if(parseInt(points, 10) >= SILVER_RANGE) {
    border = "silverie"
  }
  let result =  `
  <div class="achivment achivment-item ${border}">
    <div class="achivment-points font-cinzel">
      <div class="points-plus horizontal-center central">${points}</div>
    </div>
    <div class="achivment-description">
      <h4 class="font-cinzel">${title}</h4>
      <h5 class="font-karla">${subtitle}</h5>
    </div>
  </div>
  `
  return result
}

let final = ""
let sum = 0
for(let player of source.individual) {
  final = ""
  sum = 0
  for (let achivment of player.achivments) {
    final += template(achivment.title, achivment.subtitle, achivment.points)
    sum += achivment.points
  }

  for( let item of source.group) {
    final += template(item.title, item.subtitle, item.points)
    sum += achivment.points
  }
  writeToFile(final, player.player)
  console.log(player.player + " sum:" + sum )
}

writeToFile(final)
// for( let item of source.individual ) {
//   console.log(item.achivments.title);
// }
console.log(final)
