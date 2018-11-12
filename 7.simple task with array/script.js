var arr = [5, 7, 9];
console.log(arr);

function arrOut() {
    var p = document.getElementById('out');
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += i + ' --- ' + arr[i] + '<br>';
    }
    p.innerHTML = str;
}
arrOut();

function push() {
    var i1 = document.getElementById('i1').value;

    arr.push(i1);
    arrOut();
}
function pop() {
    arr.pop(i1);
    arrOut();
}
