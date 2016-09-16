var WebBrowser = require('./WebBrowser.js');
var GameConsole = require('./GameConsole.js');
var extend = require('./extends.js');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

//the DS is a GameConsole, which can also do WebBrowser functions
NintendoDS.prototype = Object.create(GameConsole.prototype);

extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;