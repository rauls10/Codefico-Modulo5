let cont = 0;
const prompt = require('prompt-sync')();
let n = 1;
let soma = 0;
while (n != 0){
    let n = parseInt(prompt('Digite um número: '));
    if (n == 0){
        console.log('A média é igual há: ' , soma/cont);
        break;
    }
    cont += 1;
    soma += n;
}

