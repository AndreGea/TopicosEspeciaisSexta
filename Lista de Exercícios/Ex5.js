// Criar um algoritmo que receba um valor positivo inteiro e imprima a sequência Fibonacci até o valor lido. 
// Por exemplo: caso o usuário insira o número 15, o programa deve imprimir na tela os números 0, 1, 1, 2, 3, 5, 8, 13. 
//console.log(`numero ${num3}`);

a = 1; 
b = 0;
c = Math.floor(Math.random() * 50);

console.log("Número escolhido:",+c);
console.log(b);
console.log(a);

for (i = 0; i <= c; i++) {
    a = a + b;
    b = a - b; 
        if (a <= c) {
            console.log(a);
        }
}