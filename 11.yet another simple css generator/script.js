document.getElementById('inputRange').oninput = roundCorner;

function roundCorner() {
    var resultFigure = document.getElementById('resultFigure');
    var inputTextarea = document.getElementById('inputTextarea');

    resultFigure.style.borderRadius = this.value + 'px';

    inputTextarea.innerHTML = '-webkit-border-radius: ' + this.value + 'px;\n';
    inputTextarea.innerHTML += 'border-radius: ' + this.value + 'px;';
}