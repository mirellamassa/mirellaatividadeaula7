function contarCaractere() {
    let texto = "Digite sua string aqui"; 
    let caractere = "Digite o caractere aqui"; 
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caractere) {
            contador++;
        }
    }

    console.log("O caractere '" + caractere + "' aparece " + contador + " vezes.");
}

contarCaractere();