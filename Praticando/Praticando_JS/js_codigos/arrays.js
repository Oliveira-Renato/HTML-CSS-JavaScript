/** 
 * toString()  --Tranforma uma array em uma string, separado por virgula
 * join() -- Tranforma uma array em uma string
 * indexOf() --Procura um elemento especifico na array e retorna seu index, caso contrario -1
 * array.pop() --Exclui o ultimo item da lista
 * array.shift() --Exclui o primeiro item da lista
 * array.push() --Adiciona um novo item na lista
 * array[index] = 'item' --para alterar ou também adicionar um novo item na lista
 * array.splice(p:index que deseja remover, p:quantidade que deseja remover). ex: lista.splice(1, 1)
 * array1.concat(array2) --Concatena duas lista
 * array.sort() -- Organiza a lista em ordem alfabetica
 * array.reverse() --Organiza em ordem decrescente
 * array.map(function)  --Mapeia a lista e executa uma função em cada elemento da lista
 * array.filter(function) --filtra a lista e retorna true || false dependendo da condição
 * array.every() --aplica a todos elementos de uma array uma condição, se for satisfeita retorna true, caso contrario, false
 * array.some() --aplica a alguns elementos de uma array uma condição, se for satisfeita retorna true, caso contrario, false
 * array.find() --procura determinado item na lista e retorna o mesmo, caso a condição for satisfeta
 * array.findIndex() --o nome já explicativo
* 
*/

let lista = [50, 7, 8, 15, 20];
let lista2 = [];

/*
//function map
lista2 = lista.map(function(item) {
    return item * 2;
})


for(let i in lista){
    lista2.push(lista[i]*2);
}
*/

/*
lista2 = lista.filter(function(item) {
    if(item >= 20) {
        return true;
    }else {
        return false;
    }
})


lista2 = lista.every(function(item){ // podemos usar some() aqui tb dependendo do caso
    return (item < 20)? true : false//return ()? true:false == if() {return true} else {return false}
})
*/

let cadastro = [
    {id:1, nome:'Renato', sobrenome: 'Oliveira'},
    {id:2, nome:'Rai', sobrenome: 'Silva'},
    {id:3, nome:'Ricardo', sobrenome: 'Crispim'},
]

let pessoa = cadastro.find(function(item) {
    return (item.id == 2) ? true : false;
})

let res = pessoa;

console.log(res)