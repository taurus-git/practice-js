var wrapper = document.getElementById('wrapper');

var itemContainer = document.createElement('div');
itemContainer.className = 'item-container'
wrapper.insertBefore(itemContainer, null);

var div = document.createElement('div');
div.className = 'colorful-container';
itemContainer.insertBefore(div, null);

var div2 = div.cloneNode(true);
div2.className += ' important-container';
div.parentNode.insertBefore(div2, div.nextSibling);

var div3 = div.cloneNode(true);
div3.className += ' positive-container';
div.parentNode.insertBefore(div3, null);

var div4 = div.cloneNode(true);
div4.className += ' simple-container';
div.parentNode.insertBefore(div4, null);

