//Soma simples de números longos

function aVeryBigSum(ar) {
    let sum = 0;
    for(let index = 0; index < ar.length; index++) {
        sum = sum + ar[index];
    };

    return(sum);
};

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005,]));

