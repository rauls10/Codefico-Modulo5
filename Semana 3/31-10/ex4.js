const prompt = require('prompt-sync')();
let n = parseInt(prompt('Digite um número inteiro positivo: '));
if (n <= 0){
    console.log('Nenhum número na sequência');
}
else if (n == 1){
    console.log('Sequência de Fibonacci é 0');
}
else if (n == 2){
    console.log('Sequência de Fibonacci é 0 1');
}
else{
    let pri = 0;
    let seg = 1;
    let r = '0 1';
    for (let i = 3; i <= n; i++){
        let terc = pri + seg;
        r += ` ${terc}`;
        pri = seg;
        seg = terc;
    }
    console.log('Sequência de Fibonacci até',n ,':');
    console.log(r);
}
