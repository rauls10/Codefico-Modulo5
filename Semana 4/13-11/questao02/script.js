function enviarReserva(){
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const dataReserva = document.getElementById('data').value;
    
    if(!validaTelefone(telefone)){
        alert('Digite um telefone válido');
        return;
    }

    const div = document.getElementById('dadosReserva');
    div.innerHTML = `
    <h2>DADOS DA RESERVA</h2>
    <p>Nome: ${nome}</p>
    <p>Telefone: ${telefone}</p>
    <p>Data da Reserva: ${dataReserva}</p>
    `;
    document.getElementById('reservaForm').reset();
}

function validaTelefone(telefone){
    const tel = telefone.replace(/\D/g, '');
    return tel.length >= 10 && tel.length <= 11;
}