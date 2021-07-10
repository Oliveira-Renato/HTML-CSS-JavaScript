/*------------------------------METODOS DE MANIPULAÇÃO DE STRING-------------------------------------*/

let nome = 'Renato Oliveira';

let resultado = '';

//resultado = nome.length;
//resultado = nome.indexOf(' ');


if (nome.indexOf('u') >-1) {//mostra o index da letra, se o resultado for -1 é por que não possui tal letra
    resultado = 'Tem "U"'
}else {
    resultado = 'Não tem "U"'
}

console.log(nome.concat(' :)'))//concatena
console.log(resultado + ' em ')
console.log(nome.charAt(3))
console.log(nome.substr(-8, 8))
console.log(nome.trim())//remove espaços no começo e fim
console.log(nome.toLowerCase())
console.log(nome.toUpperCase())
console.log(nome.split(' '))
console.log(nome.replace('Oliveira', 'Silva'))//Substitui uma palavra por outra
