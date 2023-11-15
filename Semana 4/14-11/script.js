// Aqui serão adicionados seus scripts
//1
function botao2(){
    document.getElementById('btnClick');
    alert('Botão clicado');
}
//2
document.getElementById('inputText').onchange = function (){
    this.style.color = 'green';
}
//3
document.getElementById('inputText').oninput = function(){
    this.style.color = 'red';
}
//4
document.getElementById('inputText').onkeydown = function(){
    document.getElementById('outputMessage').innerText = 'Teclado pressionado';
}
document.getElementById('inputText').onkeypress = function(){
    document.getElementById('outputMessage').innerText = 'Teclado sendo pressionado';
}
document.getElementById('inputText').onkeyup = function(){
    document.getElementById('outputMessage').innerText = 'Tecla liberada';
}
//5
document.getElementById('box').onmouseover = function() {
    this.style.background = 'black';
}
document.getElementById('box').onmouseout = function() {
    this.style.background = '';
}
//6
var arrastar = document.getElementById("box");
arrastar.ondragstart = function(event) {
    event.dataTransfer.setData("text/plain", "Movido");
}
arrastar.ondragover = function(event) {
    event.preventDefault();
}
arrastar.ondrop = function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    box.innerText = data;
}
//7
window.onload = function() {
    alert("Página carregada");
}
//extra
var botao = document.getElementById('btnChallenge');
var cont = 0;
botao.onclick = function () {
    cont ++;
    document.getElementById('count').innerText = cont;
}
setTimeout(function(){
    alert(`Botão clicado ${cont} vezes`);
}, 10000);
