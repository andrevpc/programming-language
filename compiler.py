# var -> var nome valor
# print -> print valor

comDict = {
    "var": "1",
    "print": "2",
    "equals": "3",
    "if": "4",
    "while": "5",
    "add": "6",
    "sub": "7",
    "div": "8",
    "mult": "9",
    "endif": "10",
    "endwhile": "11",
    "smaller": "12",
    "bigger": "13"
}

script = input("File to read> ");
compiledFile = script.replace(".ln", ".co")

arq = open(script, "r")
comList = arq.readlines()
arqCom = open(compiledFile, "w")

for com in comList:
    if len(com.replace('\n', "")) == 0:
        continue

    codeList = com.replace("\n", "").split(" ")
    
    arqCom.write(f"{comDict[codeList[0]]}")

    args = [x.strip() for x in codeList[1:]]

    if len(args) > 0:
        arqCom.write(',' + ','.join(args))

    arqCom.write(";")

arq.close()
arqCom.close()