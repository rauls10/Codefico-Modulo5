// Aqui serão adicionados seus scripts
const noticia_principal = document.getElementById("noticia-principal");
//alert(noticia_principal.innerHTML);

const titulo_noticia = document.getElementsByTagName('h1');
for (const titulo of titulo_noticia){
    titulo.style.fontWeight = "bolder";
    titulo.style.color = "green";
}

const paragrafos = document.getElementsByClassName("paragrafo-noticia");
for (const paragrafo of paragrafos){
    paragrafo.innerHTML = "Leia a notícia completa";
    paragrafo.style.color = "orange";
}

const secaocomentario = document.getElementById("secao-comentarios");
const novocomentario = document.createElement('p');
novocomentario.innerHTML = "Deixe seu comentário 2";
secaocomentario.appendChild(novocomentario);

const atualizacoes = document.getElementById("ultimas-atualizacoes");
const ultima = atualizacoes.lastElementChild;
atualizacoes.removeChild(ultima);

const alterartema = document.getElementById("alterar-tema");
alterartema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");
    }
)