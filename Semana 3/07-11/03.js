const animaldeestimacao = {nome:"Brutus", especie:"Cachorro", idade:5};
function fazerbarulho(){
    console.log(`O ${animaldeestimacao.nome} está latindo !`);
}
function envelhecer(){
    animaldeestimacao.idade ++;
}
function trocarnome(){
    animaldeestimacao.nome = "Lulu";
    console.log('Novo nome: '+animaldeestimacao.nome);
}
console.log(animaldeestimacao);
fazerbarulho();
envelhecer();
envelhecer();
envelhecer();
trocarnome();
console.log('Nova idade: '+ animaldeestimacao.idade);