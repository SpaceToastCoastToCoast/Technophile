var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');
var extend = require('./extends.js');

function SmartWatch() {
  Watch.call(this);
}

SmartWatch.prototype = Object.create(Watch.prototype);

extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;