let ninja = {
    nome: 'Kakashi',
    sobrenome: 'Hatake',
    idade: 46,
    jutsu : {
        fogo: 'Katon',
        ocular: 'Mangekyou Sharingan',
        raio: 'Raikiri'
    }  
};


//let nomeJutsu = ninja.jutsu.ocular;
//let nomeFull = ninja.nomeCompleto();
const nomeCompleto = ({sobrenome, nome}) => {
    return `${sobrenome} ${nome}`;
}

let {fogo, ocular, raio} = ninja.jutsu;
let {nome, idade} =  ninja;


console.log(nomeCompleto(ninja), idade)
console.log(fogo, ocular, raio)

