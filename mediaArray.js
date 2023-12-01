function mediaArray(arr){
    let media = 0;

    for(let index = 0; index < arr.length; index++){
        media += arr[index];
    };

    return(media / arr.length);
};

console.log(mediaArray([1,2,3,8,5,7,9,10,12]).toFixed(2));