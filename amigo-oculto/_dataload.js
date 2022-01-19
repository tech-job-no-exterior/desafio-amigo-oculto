const makeGifts = require('../datasets/makeGifts')

const totalClosest = 25
const totalPrice = 50

console.time('datasets loaded')
const gifts = makeGifts(50000)
console.timeEnd('datasets loaded')

module.exports = {
  totalClosest,
  totalPrice,
  gifts
}