const pegandoTemperatura = () => {
    return new Promise(function(resolve, reject) {
        console.log('Pegando temperatura...');

        setTimeout(function(){
            resolve('3 Graus, sensação termica de -30');
        },2000);
    });
}

let temp = pegandoTemperatura()
temp
    .then(function(resultado){
        console.log('Temperatura é de '+ resultado)
    })
    .catch(function(error){
        console.log('Vixi, deu erro.')
    })