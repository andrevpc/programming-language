# var = Trem;
# print = Bizu;
# equals = Ingual;
# if = Cpah; 
# add = Crescenta
# sub = Menas;
# div = Rachar;
# mult = Vezes;
# endif = Poise; 
# smaller = CoeMenor;
# bigger = MaisMaior; 

comDict = {
    "Trem": "1",
    "Bizu": "2",
    "Ingual": "3",
    "Cpah": "4",
    "Crescenta": "6",
    "Menas": "7",
    "Rachar": "8",
    "Vezes": "9",
    "Poise": "10",
    "CoeMenor": "12",
    "MaisMaior": "13"
}


script = input("File to read> ");
compiledFile = script.replace(script.split(".")[1], ".co")

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