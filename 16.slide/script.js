var myslide = document.getElementById('myslide');
var two = document.getElementById('two');
var middle = two.style.width = 50 + '%';
middle += two.style.borderRight = 4 + 'px' + ' solid' + ' black';

myslide.onmousemove = function (event) {
    var x = event.offsetX;
    two.style.width = x + 'px';
}
myslide.onmouseleave = function (event) {
    var middle = two.style.width = 50 + '%';
}


