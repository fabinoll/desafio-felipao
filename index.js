// Função para calcular o saldo e classificar o nível
function calcularRankeadas(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Classifica o nível do jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna a mensagem formatada
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso
let vitorias = 85; // Insira o número de vitórias
let derrotas = 20; // Insira o número de derrotas

// Chamada da função
let resultado = calcularRankeadas(vitorias, derrotas);

// Exibe o resultado
console.log(resultado);
