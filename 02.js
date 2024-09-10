function verificarLetraA(str) {
    let count = 0;

    // Converte a string para minúsculas para verificar tanto 'a' quanto 'A'
    let lowerStr = str.toLowerCase();

    // Percorre cada caractere da string e conta as ocorrências de 'a'
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 'a') {
            count++;
        }
    }

    if (count > 0) {
        if (count == 1) {
            console.log(`A letra 'a' aparece ${count} vez na string.`);
        } else {
            console.log(`A letra 'a' aparece ${count} vezes na string.`);
        }
    } else {
        console.log("A letra 'a' não foi encontrada na string.");
    }
}

// Exemplo de uso
verificarLetraA("Aqui existem 3 letras A.");
