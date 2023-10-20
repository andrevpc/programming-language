// 1 -> var
// 2 -> print
// 3 -> comp
// 4 -> if
// 5 -> endif
// 6 -> for
// 7 -> endfor

// 1,"21321",oi;3,"31232";
const fs = require('fs')

let byteList = {};

let memory = {
    "x" : 10,
    "y" : 11
};

let loopMemory = []
let ifMemory = []


//#region Comandos
const add = (x) => {
    let varName = x[0]

    x.slice(1).forEach(num => {
        memory[varName] = +memory[varName] + +num
    });
}

const sub = (x) => {
    let varName = x[0]

    x.slice(1).forEach(num => {
        memory[varName] = +memory[varName] - +num
    });
}

const div = (x) => {
    return x[0] / x[1];
}

const mult = (x) => {
    return x[0] * x[1];
}

const endWhile = (x) => {
    
}

const myWhile = (x) => {
    loopMemory.push(x[0])


}

const endIf = (x) => {
    console.log("endif")
}

const myIf = (x) => {
    return memory[x[0]] === "true"
}

const equals = (x) => {
    let a = x[1]
    let b = x[2]

    if (memory[a]) a = memory[a]
    if (memory[b]) b = memory[b]

    memory[x[0]] = (+a === +b).toString();
}

const smallerThan = (x) => {
    let a = x[1]
    let b = x[2]

    if (memory[a]) a = memory[a]
    if (memory[b]) b = memory[b]

    memory[x[0]] = (+a < +b).toString();
}

const biggerThan = (x) => {
    let a = x[1]
    let b = x[2]

    if (memory[a]) a = memory[a]
    if (memory[b]) b = memory[b]

    memory[x[0]] = (+a > +b).toString();
}

const createVar = (x) => {
    memory[x[0]] = x[1];
}

const print = (x) => {
    let varValue = memory[x]

    if (varValue)
    {
        console.log(varValue)
        return
    }
    console.log(x)
}

//#endregion

let byteCodes = {
    "1": createVar,
    "2": print,
    "3": equals,
    "4": myIf,
    "5": myWhile,
    "6": add,
    "7": sub,
    "8": div,
    "9": mult,
    "10": endIf,
    "11": endWhile,
    "12": smallerThan,
    "13": biggerThan
}



fs.readFile('arq.co', (err, inputD) => {
    if (err) throw err;
    // console.log(inputD.toString());
    // // byteCodes["1"]("Teste")

    byteList = inputD.toString().split(";")


    for (let i = 0; i < byteList.length; i++){
        let line = byteList[i];

        let command = line.split(",");

        if (command[0] === '') 
            return;

        let args = command.slice(1)

        if (command[0] === "4") {
            // console.log(myIf(args))
            if (myIf(args)) {
                continue
            }


            for (let j = i; byteList[j] !== "10"; j++) {
                i = j;
            }

            continue;
        }

        if (command[0] === "10")
            continue

        if(command[0] === "5")
        {
            args = [i, ...args]
        }

        byteCodes[command[0]](args);
    }
})