//comparação entre array

function triplets(a, b) {
    let score1 = 0;
    let score2 = 0;
    
    for(let index = 0; index < a.length; index++) {
      if(a[index] > b[index]){
        score1 += 1;
      } else if(a[index] < b[index]){
        score2 += 1;
      };
    };
    
    return[score1, score2];
  };
  
  console.log(triplets([12,24,25], [48,29, 62]));



// soma de grandes numeros
function bigSum(arr) {
    sum = 0;

    for(let index = 0; index < arr.length; index++){
        sum += arr[index];
    };
    return sum;
};

console.log(bigSum([1554,25441,5585]));
