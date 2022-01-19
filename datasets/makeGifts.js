const fs = require('fs')

module.exports = (quantity) => {
  const fileName = `gifts-${quantity}.json`
  try {
    return require(`./stored/${fileName}`)
  } catch (ignore) {}

  const output = []
  for(var i = 1; i <= quantity; i++){
    let p = Math.floor(Math.random() * 100) + 27
    while(p == 50) p = Math.floor(Math.random() * 100) + 27
    if(i == quantity-1) p = 26
    if(i == quantity) p = 24
    output.push({
      name: `Gift ${i}`,
      price: p
    })
  }

  fs.writeFileSync(`../datasets/stored/${fileName}`, "[")
  for(var i = 0; i < output.length; i++){
    try{
      var outputStr = JSON.stringify(output[i]) + ((i === output.length - 1) ? "]" : ",")
      fs.appendFileSync(`../datasets/stored/${fileName}`, outputStr, (err) => {
        if(err){
          console.log(`appendFileSync error`)
          console.log(err)
          console.log(output[i])
        }
      })
    } catch (err){
      console.log(`unknown index: ${i}`)
      console.log(err)
      console.log(output[i])
      break;
    }
  }
  return output
}