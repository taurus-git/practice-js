/*select*/
function fun1() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var options = document.getElementById('mySelect').options;
    alert('Выбрана оция ' + options[sel].text);
}
/*range*/
function fun2() {
    var rng = document.getElementById('r1');
    var p = document.getElementById('one');
    var i1 = document.getElementById('i1');
    var div = document.getElementById('test');

    p.innerHTML = rng.value;
    i1.value = rng.value;
    div.style.width = rng.value + 'px';
}