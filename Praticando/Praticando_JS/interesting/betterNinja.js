const betterNinja = "Kakashi";

// function whichNinjaIsBetter(callBack, errorCallback) {
//   if(betterNinja !== 'Kakashi' && betterNinja !== "Jiraya") {
//     errorCallback({
//       name: "Wrong answer.",
//       message: betterNinja + "? Really..."
//     })

//    } else {
//       callBack({
//         name: betterNinja,
//         message: "you're goddamn right"
//       })
//     }
// }

// whichNinjaIsBetter((result) => {
//   console.log(result.name + '? Yeah, ' + result.message)
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })


//====================Transforming the function into a PROMISE ==============================//
function whichNinjaIsBetter(callBack, errorCallback) {
  
  return new Promise((resolve, reject) => {

    if(betterNinja !== 'Kakashi' && betterNinja !== "Jiraya") {
      reject({
        name: "Wrong answer.",
        message: betterNinja + "? Really..."
      })

    } else {
        resolve({
          name: betterNinja,
          message: "you're goddamn right"
        })
      }
  })
}

whichNinjaIsBetter()
  .then((result) => {
    console.log(result.name + '? Yeah, ' + result.message)
  }).catch((error) => {
    console.log(error.name + ' ' + error.message)
  })