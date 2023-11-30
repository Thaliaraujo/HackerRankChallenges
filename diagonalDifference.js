//Dada uma matriz quadrada, calcule a diferença absoluta entre as somas de suas diagonais.
//Retorne a diferença absoluta entre as somas das duas diagonais da matriz como um único número inteiro.

function diagonalDifference(arr) {
   let leftDiagonal = 0; 
   let rightDiagonal = 0;

   for(let index = 0; index < arr.length; index++) {
        leftDiagonal += arr[index] [index];
        rightDiagonal += arr[index] [arr.length - 1 - index];
   };
   return Math.abs(leftDiagonal - rightDiagonal);
};

console.log(diagonalDifference([[11,2,4], [4,5,6], [10,8,-12]]));