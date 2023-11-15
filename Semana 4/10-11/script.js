function visibilidade(){
    const visib = document.getElementById('foto');
    if (visib.style.visibility == 'hidden'){
        visib.style.visibility = 'visible';
    }
    else{
        visib.style.visibility = 'hidden';
    }
}
function formato(){
    const format = document.getElementById('sobre');
    const input = document.getElementById('input');
    format.style.textAlign = input.value;
}
function fonte(){
    const fonte = document.getElementById('sobre');
    const input2 = document.getElementById('input2');
    fonte.style.fontFamily = input2.value;
}
function mudacor(){
    const cima = document.getElementById('header');
    const cor = document.getElementById('cor');
    const baixo = document.getElementById('footer');
    
    if (cor.value == 'white'){
        cima.style.color = 'black';
        cima.style.backgroundColor = 'white';
        baixo.style.color = 'black';
        baixo.style.backgroundColor = 'white';
    }
    else{
        cima.style.backgroundColor = cor.value;
        baixo.style.backgroundColor = cor.value;
    }
}
function mudartema(){
    const tema = document.getElementById('conteudo');
    if (tema.style.backgroundColor == 'black'){
        tema.style.backgroundColor = 'white';
        tema.style.color = 'black';
    }
    else{
        tema.style.backgroundColor = 'black';
        tema.style.color = 'white';
    }
}
function mudafundo(){
    const fundo = document.getElementById('corpo');
    const cor = document.getElementById('mudafundo');
    fundo.style.backgroundColor = cor.value;
}
