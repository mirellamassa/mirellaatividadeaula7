function inverterNumero() {
    let numero = 875;
    let numeroInvertido = '';

    while (numero > 0) {
        let digito = numero % 10;
        numeroInvertido += digito;
        numero = Math.floor(numero / 10);
    }

    console.log("Número invertido: " + numeroInvertido);
}

inverterNumero();