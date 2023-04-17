const pessoaFisica = {
    nome: "Joedson Mendes de Amorim",
    idade: 31,
    altura: 1.75,
    temCNH: true,
    apelido: ["Joe", "Joey"]
};

//let textoCNH = ( condicao ? valorVerdadeiro : valorFalso)
const textoCNH = pessoaFisica.temCNH ? "possui CNH" : "não possui CNH";

console.log(`${pessoaFisica.nome} tem ${pessoaFisica.idade} anos, 
${pessoaFisica.altura}m de altura, ${textoCNH} e o seguinte apelido:`);

for (let apelidos of pessoaFisica.apelido) {
    console.log(`- ${apelidos}`);
}
