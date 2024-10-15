function calcularFatorial() {
    let numero = 5;
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    console.log("Fatorial de " + numero + ": " + fatorial);
}

calcularFatorial();