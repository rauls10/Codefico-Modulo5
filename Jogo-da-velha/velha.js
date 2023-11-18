// Variáveis do jogo
let jogadorAtual = 'X';
let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogoAtivo = true;

// Função para verificar o vencedor
function verificarVencedor() {
  const padroesVitoria = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6]             // Diagonais
  ];

  for (const padrao of padroesVitoria) {
    const [a, b, c] = padrao;
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      return tabuleiro[a];
    }
  }

  return null;
}

// Função para verificar se o tabuleiro está cheio (empate)
function tabuleiroCheio() {
  return !tabuleiro.includes('');
}

// Função para lidar com a jogada do jogador
function realizarJogada(indice) {
  if (!jogoAtivo || tabuleiro[indice] !== '') {
    return; // Célula ocupada ou jogo encerrado
  }

  tabuleiro[indice] = jogadorAtual;
  document.getElementById(`celula${indice}`).innerText = jogadorAtual;

  const vencedor = verificarVencedor();
  if (vencedor) {
    alert(`Jogador ${vencedor} venceu!`);
    jogoAtivo = false;
  } else if (tabuleiroCheio()) {
    alert('Empate!');
    jogoAtivo = false;
  } else {
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
  }
}

// Criação do tabuleiro no HTML
const tabuleiroElemento = document.getElementById('tabuleiro');
for (let i = 0; i < 9; i++) {
  const celula = document.createElement('div');
  celula.className = 'celula';
  celula.id = `celula${i}`;
  celula.addEventListener('click', () => realizarJogada(i));
  tabuleiroElemento.appendChild(celula);
}


