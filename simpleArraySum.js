//Soma de array simples

function simpleArraySum(ar) {
    let sum = 0;
    for(let index = 0; index < ar.length; index++) {
        sum += ar[index];
    };

    return sum;
};

console.log(simpleArraySum([2, 4]));
