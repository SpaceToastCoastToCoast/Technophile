function Phone(number) {
  this.phoneNumber = number;
}

Phone.prototype.callPhone = function(otherNumber) {
  return (this.phoneNumber + ' calls ' + otherNumber);
};

module.exports = Phone;