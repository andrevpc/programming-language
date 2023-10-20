// 1 -> var
// 2 -> print
// 3 -> comp
// 4 -> if
// 5 -> endif
// 6 -> for
// 7 -> endfor

// 1,"21321",oi;3,"31232";
const fs = require('fs')


//#region Comandos
const endFor = (x, y) => {
    
}

const myFor = (x, y) => {
    
}

const endIf = (x, y) => {
    
}

const myIf = (x) => {
    
}

const comp = (x, y) => {
    
}

const createVar = (x, y) => {

}

const print = (x) => {
    console.log(x)
}
//#endregion

let byteVars = {};
let byteCodes = {
    "1": createVar,
    "2": print,
    "3": comp,
    "4": myIf,
    "5": endIf,
    "6": myFor,
    "7": endFor
}



fs.readFile('arq.co', (err, inputD) => {
    if (err) throw err;
    // console.log(inputD.toString());
    // // byteCodes["1"]("Teste")

    let byteList = inputD.toString().split(";")

    byteList.forEach(x => console.log(x))

})