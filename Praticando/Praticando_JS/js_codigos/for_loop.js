/*
let contador = '';

for (let i = 0; i < 15; i++) {
    contador += i + '<br/>'; 
} 

document.getElementById('demo').innerHTML= contador;
*/

let carros = ['Corola', 'Civic', 'Corsa', 'Uno', 'Fusca'];
let html = '<ul>';

for (let i in carros) {
    html += '<li>' + carros[i] + '</li>';
}

html += '</ul>';

document.getElementById('demo').innerHTML= html;
