// Receber dois números inteiros e informar qual valor lido é o menor e qual é o maior. 
let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

console.log("Primeiro número: "+num1+" \nSegundo número: "+num2);

if (num1 > num2){
    console.log(num1+" é maior que "+num2);
}
else if(num2 > num1){
    console.log(num2+" é maior que "+num1);
}
else{
    console.log("Os números escolhidos são iguais");
}