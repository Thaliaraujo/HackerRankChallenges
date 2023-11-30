//Dado um array de números inteiros, calcule as proporções de seus elementos que são positivos, negativos e zero . 
//Imprima o valor decimal de cada fração em uma nova linha com 6 casas após a vírgula.

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for(let index = 0; index < arr.length; index++){
        if(arr[index] > 0) {
            positive += 1;
        }else if( arr[index] < 0){
            negative += 1;
        }else{
            zero += 1;
        };
    };
    
    console.log((positive / arr.length).toFixed(6));
    console.log((negative / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));
};

plusMinus([-4, 3, -9, 0, 4, 1]);
