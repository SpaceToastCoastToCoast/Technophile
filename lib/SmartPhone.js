var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var WebBrowser = require('./WebBrowser.js');
var GameConsole = require('./GameConsole.js');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  extend(SmartPhone.prototype, new GameConsole('Smart Phone'));
}

//SmartPhone is a Phone, so it subclasses from that
SmartPhone.prototype = Object.create(Phone.prototype);

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

module.exports = SmartPhone;