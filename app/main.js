var subModule1 = require('./module1.js')
var subModule2 = require('./module2.js')
document.write('Main entry point');
setTimeout( function() {
  subModule1.runMe()
},1000);

setTimeout( function() {
  subModule2.runMe()
},2000);
