// Crie um algoritmo que permita fazer três conversões monetárias. O algoritmo deve receber o valor em real (R$) e apresentar os valores convertidos em:
// a)	Dólar (1 dólar = 3,78 reais)
// b)	Euro (1 euro = 4,21 reais)
// c)	Peso argentino (1 peso argentino = 0,08 reais

var dolar = Math.random() * 10;
var euro = Math.random() * 10;
var pesos = Math.random() * 10;

console.log(dolar+ " reais convertido em dólar: " +dolar / 3.78);
console.log(euro+ " reais convertido em euros: " +euro / 4.21);
console.log(pesos+ " reais convertido em pesos: " +pesos / 0.08);