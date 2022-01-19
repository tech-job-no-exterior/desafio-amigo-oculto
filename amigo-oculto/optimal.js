const { _, totalPrice, gifts } = require('./_dataload.js')

console.time('runtime');

let memo = []
let myGifts = []

for(const [i, gift] of gifts.entries()){

    if(gift.price == totalPrice){
        myGifts.push(gift);
        break;
    }

    let key = totalPrice - gift.price
    if (typeof memo[key] !== 'undefined') {
        myGifts.push(gifts[memo[key]]);
        myGifts.push(gift);
        break;
    }  
    
    memo[gift.price] = i;
}

console.log(myGifts);

console.timeEnd('runtime');

/*
# Complexidade de execução
## cada presente 
## O(n)
m = 50.000 presentes
## resultado = 50.000  (~50.000x mais rapido)

# Complexidade de espaço
## cada presente 
## O(n)
## resultado = 50.000
*/