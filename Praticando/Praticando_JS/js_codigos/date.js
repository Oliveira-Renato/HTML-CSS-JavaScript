/**
 * toUTCString() -- remove o fuso horario
 * toDateString() -- retorna a data resumida. DIA DE SEMANA, MÊS, DIA do mÊs, ANO 
 * 
 */

let d = new Date();

d.setDate(d.getDate() + 31);

let valor = d;

console.log(valor.toDateString())