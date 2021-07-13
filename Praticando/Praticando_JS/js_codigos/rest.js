
/*function adicionar(...nomes) {
    console.log(nomes)
}

adicionar('Pedro', 'Paulo', 'Maria', 'Jose')
*/


function adicionar(nomes, ...novosNomes) {//primeiro parametro recebe um array,  o segundo recene o rest
    let conjunto = [
        ...nomes,
        ...novosNomes
    ]

    return conjunto;
}

let nomes = ['Sara', 'Marta']

let outros = adicionar(nomes, 'Pedro', 'Paulo', 'Maria', 'Jose')

console.log(outros);