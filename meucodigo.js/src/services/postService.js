export async function fetchPosts() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
        if (!response.ok) throw new error("Erro ao buscar os posts")
            return await response.json();
    } catch(error){
            console.error(error);
            return[]
        }
    }