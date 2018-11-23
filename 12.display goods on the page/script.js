goods = {
    '21354' : {
        'name' : 'pea',
        'cost' : 20,
        'image' : '/images/pea.svg',
        'stock' : true
    },
    '01874' : {
        'name' : 'apricot',
        'cost' : 40,
        'image' : '/images/apricot.svg',
        'stock' : false
    },
    '34567' : {
        'name' : 'banana',
        'cost' : 10,
        'image' : '/images/banana.svg',
        'stock' : true
    },
}

var itemWrapper = '';
var itemContainer = document.createElement('div');
/*itemContainer.className = "item-container";
itemWrapper.appendChild(itemContainer);*/


for (var key in goods) {
    itemWrapper += 'Name: ' + goods[key].name + '<br>';
    itemWrapper += 'Cost: ' + goods[key].cost + '<br>';
    itemWrapper += 'Stock: ' + goods[key].stock + '<br>';
    itemWrapper += '<img src="' + goods[key].image + '">' + '<br>';
}

document.getElementById('item-wrapper').innerHTML = itemWrapper;