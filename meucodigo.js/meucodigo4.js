async function criarPost(id) {

    const novoPost = {
        title: "Meu teste legal",
        body: "Meu conteúdo aqui...",
        userId: 1
    };

    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoPost)
    });
    const postCriado = await resposta.json()
    console.log("Post criado:", postCriado)
}
criarPost();