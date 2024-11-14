function comparar(a, b) {
    var mensagem = b;
    if (a == b) {
        return "ambos são iguais!";
    }

    if (a > b) {
        return a;
    }

    return b;
}

console.log(comparar(5, 10));
console.log(comparar(5, 10));
console.log(comparar(5, 10));