//1
//2
const pessoa = {nome:'Raul', idade:27};

//3
console.log(pessoa);

//4
pessoa.idade = 30;
console.log('Idade:', pessoa.idade);

//5 
const pessoa2 = {
    nome:'José', 
    idade:35, 
};

//6
for (let atrib in pessoa2){
    console.log(`${atrib}: ${pessoa2[atrib]}`);
}

//7
pessoa2.apresentacao = function (){
    console.log ('Olá, meu nome é', pessoa2.nome);
}
pessoa2.apresentacao();

//8
pessoa.email = 'raulfelipe@gmail.com';
console.log(pessoa.email);