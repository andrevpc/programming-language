const fs = require('fs')

let byteList = {};

let memory = {
    "x" : 10,
    "y" : 11
};

let loopMemory = []

//#region Functions
const add = (x) => {
    let varName = x[0]

    x.slice(1).forEach(num => {
        memory[varName] = (+memory[varName] + +num).toString()
    });
}

const sub = (x) => {
    let varName = x[0]

    x.slice(1).forEach(num => {
        memory[varName] = (+memory[varName] - +num).toString()
    });
}

const div = (x) => {
    memory[x[0]] = (+[x[1]] / +[x[2]]).toString()
}

const mult = (x) => {
    let varName = x[0]

    x.slice(1).forEach(num => {
        memory[varName] = (+memory[varName] * +num).toString()
    });
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
    if(x.length > 2)
    {
        memory[x[0]] = x.slice(1)
        return
    }
    memory[x[0]] = x[1];
}

const print = (x) => {
    let varValue = memory[x]

    if (varValue)
    {
        if (typeof(varValue) != "string" && varValue.length >= 2)
        {
            console.log(varValue.join(" "))
            return
        }
        console.log(varValue)
        return
    }
    console.log(x.join(" "))
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
    byteList = inputD.toString().split(";")


    for (let i = 0; i < byteList.length; i++){
        let line = byteList[i];

        let command = line.split(",");

        if (command[0] === '') 
            return;

        let args = command.slice(1)

        if (command[0] === "4") {
            if (myIf(args)) continue


            for (let j = i; byteList[j] !== "10"; j++)
                i = j;

            continue;
        }

        if (command[0] === "10")
            continue

        if(command[0] === "5")
            args = [i, ...args]

        byteCodes[command[0]](args);
    }
})