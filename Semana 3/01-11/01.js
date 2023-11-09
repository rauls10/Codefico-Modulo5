const prompt = require('prompt-sync')();

function verificaEmail(email){ 
    if (email.indexOf('@gmail.com') != -1){
        console.log('O email contém o domínio @gmail.com');
        let indexdominio = email.indexOf('@');
        let nomeusuario = email.slice(0, indexdominio);
        console.log('O nome do usuário é: ', nomeusuario);
    }else{
        console.log('O email não contêm o domínio @gmail.com');
        let indexdominio = email.indexOf('@');
        let dominio = email.slice(indexdominio);
        console.log('O domínio é: ', dominio);
    }
}
let email = prompt('Informe um email: ');
verificaEmail(email);