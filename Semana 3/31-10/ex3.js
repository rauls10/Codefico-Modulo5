const prompt = require('prompt-sync')();
let r = prompt('Informe se deseja imprimir um retângulo (s/n): ');
while (r == 's'){
    let a = parseInt(prompt('Informe a altura do retângulo: '));
    let l = parseInt(prompt('Informe a largura do retângulo: '));
    if (a > 0 && l > 0 && l > a){
        let r = '';
        for(let i = 0; i < a; i++){
            for(let j = 0; j < l; j++){
                r += '*';
                console.log(r);
            }
            r += '\n';
            console.log(r);
            break;
        }
    }
    else if (r == 'n'){
        console.log('Finalizando programa');
        break;
    }
    else if (r != 's' || r !='n'){
        console.log('Resposta incorreta');
    }
    else{
        console.log('Valores inválidos');
    }
    r = prompt('Informe se deseja imprimir outro retângulo (s/n): ');
}