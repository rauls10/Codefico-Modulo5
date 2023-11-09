function Livro(titulo, autor, anopublicacao, genero, disponivel){
    this.titulo = titulo;
    this.autor = autor;
    this.anopublicacao = anopublicacao;
    this.genero = genero;
    this.disponivel = disponivel;
    this.emprestarLivro = function (){
        this.disponivel = false;
    }
}
const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia", true);
console.log(livro);
livro.emprestarLivro();
console.log('Livro disponível:', livro.disponivel);

