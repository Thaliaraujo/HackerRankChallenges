function catsAndMouse(x, y, z){
    let catA = x;
    let catB = y;
    let mouseC = z;

    if(Math.abs(mouseC - catA) < Math.abs(mouseC - catB)){
       return('Cat A');
    } else if(Math.abs(mouseC - catA) === Math.abs(mouseC - catB)){
        return('Mouse C');
    } else{
        return('Cat B');
    };
};

console.log(catsAndMouse(1,3,2));