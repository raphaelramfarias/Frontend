//GET
// link de api https://jsonplaceholder.typicode.com/users

async function buscarUsuario(id) {

    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users/2');

        if (!resposta.ok) {
            throw new Error('Erro HTTP: ${res.status}');
        }

        const dados = await resposta.json();
        console.log("Nome:",dados.name)
        //console.log(dados)
    } catch (erro) {
        console.error("Erro ao buscar usuários:", erro.message)

    }

}
buscarUsuario(2); //buscou o segundo id do link, conforme ultimo algarismo do link
