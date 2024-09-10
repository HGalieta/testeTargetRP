function isFibonacci(num) {
    if (num === 0 || num === 1) {
        return true;
    }

    let a = 0;
    let b = 1;
    let next = a + b;

    while (next <= num) {
        if (next === num) {
            return true;
        }
        a = b;
        b = next;
        next = a + b;
    }

    return false;
}

// Função principal para receber o número e mostrar a mensagem
function verificarFibonacci(numero) {
    if (isFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
}

verificarFibonacci(21);
