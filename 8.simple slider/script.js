//code for move slider by click on buttons

/*
document.getElementById('sliderLeft').onclick = sliderLeft;
document.getElementById('sliderRight').onclick = sliderRight;

var left = 0;
var right = 0;
var sliderString = document.getElementById('slider-string');

function sliderLeft() {
    left = left - 256;
    if (left < - 256*5) {
        left = 0;
    };
    sliderString.style.left = left +'px';
}

function sliderRight() {
    left = left + 256;
    if (left > 0) {
        left = -256 * 5;
    };
    sliderString.style.left = left + 'px';
}*/

//code for move slider per some time
autoSlider();

var timer;
var left = 0;

function autoSlider() {
    timer = setTimeout(sliderLeft, 1000);
}

function sliderLeft() {
    left = left - 256;
    if (left < - 256*5) {
        left = 0;
    };
    sliderString.style.left = left +'px';
    autoSlider();
}