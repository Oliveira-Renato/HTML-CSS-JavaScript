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


let {jutsu, idade, nome} = ninja;
let {jutsu:{fogo, raio}} = ninja
let {} = ninja;



console.log(nomeCompleto(ninja), idade, fogo, raio)