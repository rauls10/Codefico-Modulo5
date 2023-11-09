const prompt = require('prompt-sync')();
let a = parseInt(prompt('Digite o primeiro número: '));
let b = parseInt(prompt('Digite o segundo número: '));
let soma = 0;
for(let i = a; i >= 1; i--){
    soma += b;
}
console.log('A multiplicação de', a,'por', b,'é:', soma);
