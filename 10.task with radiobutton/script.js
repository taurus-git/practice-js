var radio = document.getElementsByName('radio');

for ( var i = 0; i < radio.length; i++ ) {
    radio[i].onchange = showRadioItem;
}

function showRadioItem (){
    console.log (this.value);
}

document.getElementById('pushButton').onclick = checkRadio;

function checkRadio() {
    var radioArray = document.getElementsByName('radio');

    for (var i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            alert("You check: " + radioArray[i].value);
            break;
        }
    }
}
