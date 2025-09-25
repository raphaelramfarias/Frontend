export async function fetchComments() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/comments/')
        if (!response.ok) throw new error("Erro ao buscar os comments")
            return await response.json();
    } catch(error){
            console.error(error);
            return[]
        }
    }