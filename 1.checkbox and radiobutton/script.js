'use strict'
/*checkbox*/
document.getElementById('checkboxExample').onchange = function alertOnCheckbox() {

    if (this.checked) {
        alert('Выбран');
    } else {
        alert('Не выбран');
    }
}

/*radiobutton*/

document.getElementById('viewValueInLabel').onclick = function alertOnRadiobutton() {
    var radioElement = document.getElementsByName('radioName');

    for (var i = 0; i < radioElement.length; i++) {
            if (radioElement[i].checked) {
                alert('Выбран ' + i + ' элемент')
            }
    }
}


var form = document.querySelector('form');
var radioElement = document.getElementsByName('radioName');

form.addEventListener('click', function () {
    for (var i = 0; i < radioElement.length; i++) {
        if (radioElement[i].checked) {
            console.log('Выбран ' + i + ' элемент')
        }
    }
})
