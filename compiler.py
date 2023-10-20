# var -> var nome valor
# print -> print valor

comDict = {
    "var": "1",
    "print": "2",
    "comp": "3",
    "if": "4",
    "for": "5"
}

arq = open("arq.ln", "r")
comList = arq.readlines()
arqCom = open("arq.co", "w")

for com in comList:
    c = com.split(" ")
    
    arqCom.write(f"{comDict[c[0]]}")

    args = [x.strip() for x in c[1:]]

    if len(args) > 0:
        arqCom.write(',' + ','.join(args))

    arqCom.write(";")

arq.close()
arqCom.close()