const pessoaFisica = {
    nome: "Joedson Mendes de Amorim",
    idade: 31,
    altura: 1.75,
    temCNH: true,
    apelido: "Joe"
};

let textoCNH = "";

if (pessoaFisica.temCNH) {
    textoCNH = "possui CNH";
} else {
    textoCNH = "não possui CNH";
}

console.log(`${pessoaFisica.nome} tem ${pessoaFisica.idade} anos, ${pessoaFisica.altura}m de altura, ${textoCNH} e o seguinte apelido:
- ${pessoaFisica.apelido} `);
