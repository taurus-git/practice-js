var nightModeButton = document.getElementById('night-mode-button');
var body = document.body;

nightModeButton.onclick = function() {
    body.classList.toggle('night-mode');
}