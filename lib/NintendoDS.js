var WebBrowser = require('./WebBrowser.js');
var GameConsole = require('./GameConsole.js');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

//the DS is a GameConsole, which can also do WebBrowser functions
NintendoDS.prototype = Object.create(GameConsole.prototype);

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;