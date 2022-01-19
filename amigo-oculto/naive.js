const { _, totalPrice, gifts } = require('./_dataload.js')

console.time('runtime');

let myGifts = []
let total = 0
for(const gift1 of gifts){

    if(gift1.price == totalPrice){
        myGifts = [];
        myGifts.push(gift1);
        total = 1;
        break;
    }

    if(total == 0){
        for(const gift2 of gifts){
            if( gift1 != gift2 && gift1.price + gift2.price == totalPrice) {
                myGifts.push(gift1);
                myGifts.push(gift2);
                total = 2;
                break;
            }    
        }
    }
}

console.log(myGifts);

console.timeEnd('runtime');

/*
# Complexidade de execução
## cada presente * cada presente
## O(n^2)
m = 50.000 presentes
## resultado = 2.500.000.000

# Complexidade de espaço
## complexidade = constante (não varia)
## O(1)
## resultado = 0
*/