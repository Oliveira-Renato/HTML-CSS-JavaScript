//fazendo updload de arquivo
async function enviarArquivo() {
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData()
    body.append('title','BLA BLA BLA')
    body.append('arquivo',arquivo)

    let req = await fetch('http://meusite.com/upload', {
        method:'POST',
        body: body,
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
}

//mostrando thumbnail 
const mostrarImg = () => {
    let arquivo = document.getElementById('arquivo').files[0];
    let img = document.createElement('img');

    img.src = URL.createObjectURL(arquivo)
    img.width = 200;

    document.getElementById('area').appendChild(img)
}