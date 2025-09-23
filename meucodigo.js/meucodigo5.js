//THEN
//ASYNC/AWAIT

async function CarregarDados() {
    try {

        const [post, comments, users] = await Promise.allSettled([

            fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json()), //"https://jsonplaceholder.typicode.com/posts"
            fetch('https://jsonplaceholder.typicode.com/comments/2').then(res => res.json()),
            fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json())
        ]);
        
        console.log(post, comments, users);
    } catch (erro) {
        console.error('Erro ao carregar dados:', erro);
    }
}   
CarregarDados(2,2,2)