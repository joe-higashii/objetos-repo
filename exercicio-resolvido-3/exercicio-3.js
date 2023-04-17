const produtosConsumidos = [
    {
        nome: "lasanha",
        precoUnitario: 2500,
        quantidade: 1
    },
    {
        nome: "biscoito",
        precoUnitario: 200,
        quantidade: 3
    },
    {
        nome: "guarana",
        precoUnitario: 100,
        quantidade: 5
    },
]

const cliente = {
    nomeDoCliente: "Rambo",
    idadeDoCliente: 32,
    produtosConsumidos: produtosConsumidos
};

cliente.idadeDoCliente = 37

console.log(cliente.produtosConsumidos[2].precoUnitario);
