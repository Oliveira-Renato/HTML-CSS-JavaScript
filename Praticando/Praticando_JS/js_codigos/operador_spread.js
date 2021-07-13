let numeros = [1, 2, 3, 4]
//numeros.push(5,6,7)
let outros = [...numeros, 5, 6, 7, 8]

/*
let info = {
    nome: 'Renato',
    sobrenome: 'Oliveira',
    idade: 26
}

let maisInfo = {
    ...info,
    cidade: 'Carapicuiba',
    estado: 'São Paulo'
}
*/

//cria uma função e depois um objeto dentro
function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status: 0,
        token: '1231331',
        cadastro: '......'
    };
    return novasInfo;//retorna o objeto
}

console.log(adicionarInfo({nome:'Rai', sobrenome: 'Oliveira'}))