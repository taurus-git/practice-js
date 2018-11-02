var div = document.createElement('div');
div.style.width = '200px';
div.style.height = '100px';
div.style.background = 'red';
document.body.appendChild(div);
div.id = div;

function changeBorderRadius() {
    var rangeTopLeft = document.getElementById('rangeTopLeft').value;
    var rangeTopRight = document.getElementById('rangeTopRight').value;
    var rangeBottomRight = document.getElementById('rangeBottomRight').value;
    var rangeBottomLeft = document.getElementById('rangeBottomLeft').value;

    var textTopLeft = document.getElementById('textTopLeft');
    var textTopRight = document.getElementById('textTopRight');
    var textBottomRight = document.getElementById('textBottomRight');
    var textBottomLeft = document.getElementById('textBottomLeft');

    textTopLeft.value = rangeTopLeft;
    textTopRight.value = rangeTopRight;
    textBottomRight.value = rangeBottomRight;
    textBottomLeft.value = rangeBottomLeft;

    div.style.borderRadius = rangeTopLeft + 'px ' + rangeTopRight + 'px ' + rangeBottomRight + 'px ' + rangeBottomLeft + 'px ';
}

function changeBlockParameters() {
    var rangeBlockWidth = document.getElementById('rangeBlockWidth').value;
    var rangeBlockHeight = document.getElementById('rangeBlockHeight').value;
    var inputBlockColor = document.getElementById('inputBlockColor').value;

    textBlockWidth.value = rangeBlockWidth;
    textBlockHeight.value = rangeBlockHeight;

    div.style.width = rangeBlockWidth + 'px ';
    div.style.height = rangeBlockHeight + 'px ';
    div.style.background = inputBlockColor;
}


