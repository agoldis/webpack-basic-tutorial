var subModule2 = require('./module2.js')
document.write('Main module 2 is loaded...\n');
setTimeout( function() {
  subModule2.runMe()
},1000);

module.exports = {
  runMe: function () {
    console.log("Main module 2 is exported")
  }
};
