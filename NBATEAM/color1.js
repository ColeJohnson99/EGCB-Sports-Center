const teamlocations = require("./findpng.js");
const path = require('path');
const getColors = require('get-image-colors');
let colorarray;
let teamstring = require('./string.js');
string.replace(/ /g, "");

let currentteam = "/NBAlogos/" + teamlocations[teamstring] +".png";
getColors(path.join(__dirname, currentteam)).then(colors => {
    
   colorarray = colors.map(color => color.hex());
   console.log(colorarray);
   });

   let teamobj ={
    url: currentteam,
    colors: colorarray
}
module.exports = teamobj;



