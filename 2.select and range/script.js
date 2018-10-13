/*select*/
document.getElementById('mySelect').onchange = function alertOnSelected() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('Выбрана опция ' + options[sel].text);
};

/*range*/
document.getElementById('myRange').oninput = function myRange() {

    var range = document.getElementById('myRange');
    var rangeNum = document.getElementById('numeralRange');
    var numField = document.getElementById('numField');
    var stringRange = document.getElementById('visualRange');

    rangeNum.innerHTML = range.value;
    numField.value = range.value;
    stringRange.style.width = range.value + 'px';
};