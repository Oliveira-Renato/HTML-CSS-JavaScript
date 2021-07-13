let email = 'nome_sobrenome@gmail.com';
let emailFinal = email.slice(12);
let tamanho = email.length 
let emailMask =  emailFinal.padStart(tamanho, '*')



console.log('Confirme seu email: ' + emailMask)
