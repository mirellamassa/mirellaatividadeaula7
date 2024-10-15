function contarVogais() {
    let texto = "Beterraba";
    let contador = 0;
    let vogais = "aeiouAEIOU";

    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }

    console.log("Número de vogais: " + contador);
}

contarVogais();