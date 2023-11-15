class Livro{
    constructor(titulo, autor, anopublicacao){
    this.titulo = titulo;
    this.autor = autor;
    this.anopublicacao = anopublicacao;
    }
}
const livro1 = new Livro("João e o pé de Feijão", "Dudu Zambosa", 1980);
console.log(livro1);