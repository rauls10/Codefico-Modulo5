let numeros = [1, 2, 7, 14, 5, 0, 10, 23, 13, 17, 8, 19];

//1
function ehprimo(n){
    if (n <= 1){
        return false;
    }
    for (let i = 2; i < n; i++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}

//2
numerosprimos = numeros.filter(ehprimo);
console.log('\nNúmeros primos')
console.log(numerosprimos);

//3
let quadradodosprimos = numerosprimos.map(n => n ** 2);
console.log('\nQuadrado dos primos')
console.log(quadradodosprimos);