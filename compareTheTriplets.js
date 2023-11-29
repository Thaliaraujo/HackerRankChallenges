function compareTriplets(a, b) {

   let aliceScore = 0;
   let bobScore = 0;
   
   for(let index = 0; index < a.length; index++){
      if(a[index] > b[index]){
         aliceScore += 1;
      }else if(a[index] < b[index]){
         bobScore += 1;
      };
   };
      
     return[aliceScore, bobScore];
};

console.log(compareTriplets([17,28,30], [32,37,28]));

