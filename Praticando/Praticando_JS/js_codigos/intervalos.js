let timer;

/*
function startTime() {
    timer = setInterval(showTime, 1000);
}

function stopTime() {   
    clearInterval(timer);
}

const showTime = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h + ':' + m + ':' + s;

    document.querySelector('#demo').innerHTML = txt;
}

startTime()
*/

function rodou() {
    timer = setTimeout(() => {
        document.querySelector('#demo').innerHTML = 'Rodou!'
    }, 2000);
}

function stopTime() {
    clearTimeout(timer)
}