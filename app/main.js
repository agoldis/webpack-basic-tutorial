var subModule1 = require('./module1.js');
var subModule2 = require('./module2.js');

var createList = function () {
  return document.createElement('ul');
};

var createListItem = function (text) {
  var li =  document.createElement('li');
  var content = document.createTextNode(text)
  li.appendChild(content)
  return li;
};

var addListItem = function (list, item) {
  list.appendChild(item)
  return list
};

var run = function () {
  var ul = createList()
  document.body.appendChild(ul);

  var item = createListItem('Main module loaded')
  addListItem(ul, item);

  setTimeout( function() {
    var item = createListItem(subModule1.runMe())
    addListItem(ul, item)

  }, 1000);

  setTimeout( function() {
    var item = createListItem(subModule2.runMe())
    addListItem(ul, item)
  }, 2000);
};


document.addEventListener("DOMContentLoaded", function() {
  run()
});


if(module.hot) {
  module.hot.accept();

  module.hot.dispose(function() {
    console.log('disposing');
    run();
  });
}
