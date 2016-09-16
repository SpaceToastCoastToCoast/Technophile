var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var WebBrowser = require('./WebBrowser.js');
var GameConsole = require('./GameConsole.js');
var extend = require('./extends.js');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber);
  //we must call the GameConsole constructor inside this constructor
  // in order for our console to have a name
  GameConsole.call(this, 'Smart Phone');
}

//SmartPhone is a Phone, so it subclasses from that and only that
SmartPhone.prototype = Object.create(Phone.prototype);

//SmartPhone can also do these things, but they are not its primary functions
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);

module.exports = SmartPhone;