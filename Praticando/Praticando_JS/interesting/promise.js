function sumNumber(){
  result = 1 + 1;

  console.log('Is 1 + 1 = 2 ???')

  if(result === 2) {
    messageSucess()
  }else {
    messageError()
  }
}

function messageSucess() {
  console.log('Obvious.')
}

function messageError() {
  console.log('Error, is it that possible?')
}

// sumNumber()

//Now with Ò ,ó ====> "PROMISE" <========== ò. Ó
let p = new Promise((resolve, reject) => {
  let result = 1 + 1;

  console.log('Is 1 + 1 = 2 ???')

  if(result == 2) {
    resolve('Obvious.')
  } else {
    reject('Error, is it that possible?')
  }

})

p.then((message) => {
  console.log('This is "then" : ' + message)
}).catch((err) => {
  console.log('This is "catch" : ' + err)
})