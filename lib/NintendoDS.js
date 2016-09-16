WebBrowser = require('./WebBrowser.js');
GameConsole = require('./GameConsole.js');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

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