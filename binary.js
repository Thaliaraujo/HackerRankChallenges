const binary = (list, item) => {
    let baixo = 0;
    let alto = length(list) - 1;

    while(baixo <= alto){
        let meio = (baixo + alto) / 2;
        let chute = list[meio];

        if( chute == item){
            return meio;
        } if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        };
    };
};

const minhalista = [1,3,5,7,9];

console.log(minhalista[19])