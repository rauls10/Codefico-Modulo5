const prompt = require('prompt-sync')();
while (true){
    let nomeusuario = prompt('Informe o nome de usuário: '); 
    if (nomeusuario.length >= 12){
        nomeusuario = nomeusuario.toLowerCase();
        if (nomeusuario.indexOf('@') == -1){
            console.log("ERRO! O nome de usuário deve conter '@'");
        }
        if (nomeusuario.indexOf('admin') != -1){
            console.log("ERRO! O nome de usuário deve começar com 'user'");
        }
        else if (nomeusuario.indexOf('user') != -1){
            console.log("Nome de Usuário válido!");
            console.log("Seu nome de usuário é: ", nomeusuario);
            break;
        }
    }
    else{
        console.log('ERRO, o nome de usuário deve ter pelo menos 12 caracteres');
    }
}