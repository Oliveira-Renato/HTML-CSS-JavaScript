async function loadPosts() {
    document.querySelector('#posts').innerHTML = '';
    document.querySelector('.chama').classList.add('load');

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();

    montarBlog(json);
    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(resultado){
        console.log(resultado);
        return resultado.json();
    })
    .then(function(json){
        montarBlog(json); 
    })
    .catch(function(error){
        console.log('Ops, deu ruim');
    });
    */
}


const montarBlog = (lista) =>{
    let html = ''

    for (let i in lista ) {
        html += '<h3>'+ lista[i].title +'</h3>'
        html += lista[i].body + '<br/>';
        html += '<hr/>';
    }

    document.querySelector('.chama').classList.remove('load');
    document.querySelector('#posts').innerHTML = html;
}