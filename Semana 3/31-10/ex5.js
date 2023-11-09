const prompt = require('prompt-sync')();
let texto = prompt('Digite um texto: ');
let invertido = ''
for (let i = texto.length - 1; i >= 0; i--){
    invertido += texto[i];
}
console.log(invertido);