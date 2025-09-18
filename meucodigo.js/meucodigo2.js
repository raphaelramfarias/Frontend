//parser: string json - obj js
// stringify: obj js -> string json

const usuario = {
id: 1,
nome: "Raphael",
ativo: true

};

const jsonstring = JSON.stringify(usuario);
console.log(jsonstring);

const jsonRecebido = '{"id":1,"nome":"Raphael","ativo":true}';

try {
    const dados = JSON.parse(jsonRecebido);
    console.log(dados.nome);
    console.log(dados.ativo);
} catch (e){
    console.error("Erro ao processar json:", e.message);
}
