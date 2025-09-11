//for classico
const arraynumbers =[]
for(let value = 10; value <=100; value += 10){
    arraynumbers.push(value)
    console.log('Valor:' + value)
}


const frutas = ["maçã", "banana", "uva"];
//i é a posição do item 0 ou 1 ou 2 no exemplo acima
for (let i = 0; i < frutas.length; i++){
    console.log(`Fruta ${i}: ${frutas[i]}`)
}

//for of
for(let Fruta of frutas ) {
    console.log("Eu gosto de " + Fruta)
}

//for in

