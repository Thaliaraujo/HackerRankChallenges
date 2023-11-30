function stairCase(n) {
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n - 1;
    for(let lineIndex = ''; lineIndex < n; lineIndex++){
        for(let columnIndex = ''; columnIndex < n; columnIndex++){
            if(columnIndex < inputPosition){
                inputLine += ' ';
            }else{
                inputLine += symbol;
            };
        };

        console.log(inputLine);
        inputLine = '';
        inputPosition -= 1;
    };
};

stairCase(8)