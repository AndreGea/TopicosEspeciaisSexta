// Desenvolver um algoritmo para ler o valor inteiro da idade de uma pessoa e imprimir uma das mensagens: 
// se idade <= 13: Criança, se idade > 13 e <= 18: Adolescente, se idade > 18 e <= 60: Adulto e se idade > 60: Idoso.

let idade = Math.floor(Math.random() * 100);

if (idade <= 13){
    console.log("Você é considerado uma criança pois tem "+idade+" anos de idade");
}
else if (idade <= 18){
    console.log("Você é considerado um adolescente pois tem "+idade+" anos de idade");
}
else if (idade > 18 && idade <= 60){
    console.log("Você é considerado um adulto pois tem "+idade+" anos de idade");
}
else{
    console.log("Você é considerado um idoso pois tem "+idade+" anos de idade");
}