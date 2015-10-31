var subModule1 = require('./module1.js')

document.write('Main module 1 is loaded...\n');
setTimeout( function() {
  subModule1.runMe()
},1000);

module.exports = {
  runMe: function () {
    console.log("Main module 1 is exported")
  }
};
