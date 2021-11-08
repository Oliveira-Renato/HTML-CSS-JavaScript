var valor = document.getElementsByClassName('cep');


form.addEventListener('submit', function(e) {
  // alerta o valor do campo
  alert(campo.value);

  // impede o envio do form
  e.preventDefault();
});

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep !== "") {

  //Expressão regular para validar CEP
  if(validacep.test(cep)) {

    //preenche os campos com "..." enquanto consulta webservice.
    document.getElementById('endereço').value="...";
    document.getElementById('bairro').value="...";
    document.getElementById('cidade').value="...";
    document.getElementById('estado').value="...";

    //Cria um elemento javascript.
    var script = document.createElement('script');

    //Sincroniza com o callback
    script.src = '//viacep.com.br/ws/'+ cep +'/json/?callback=meu_callback';

    //Insere script no documento  e carrega o conteúdo
    document.body.appendChild(script);
  }

}