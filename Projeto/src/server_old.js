const { request, response } = require("express");
const app = express();

console.clear(); //Limpar o terminal quando for rodar

//Métodos HTTP -> Get e Post
//Get -> Solicita determinado recurso do servidor
//Post -> Envia um recurso para o servidor

app.get("/", (request, response) => {
    response.send ("Hello World!");
})

//Ambos funcionam
// app.listen(3000, function(){
//     console.log("O servidor esta rodando");
// });

app.listen(3000, () => {
    console.log("O servidor esta rodando");
});
