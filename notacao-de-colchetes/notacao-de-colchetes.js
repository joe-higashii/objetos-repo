const pessoa = {
    nome: "Joe",
    altura: 1.75,
    peso: 71,
    idade: 31,
    signo: "sagitário",
};

pessoa["nome"] = "Joedson";
pessoa["altura"] = 1.75;
pessoa["peso"] = 71;

console.log(`Meu nome é ${pessoa.nome}`);
console.log(`Tenho ${pessoa.idade} anos`);
console.log(`Tenho ${pessoa.altura}m de altura`);
console.log(`Peso ${pessoa.peso} quilos`);
