var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

function SmartWatch() {
  Watch.call(this);
}

SmartWatch.prototype = Object.create(Watch.prototype);

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;