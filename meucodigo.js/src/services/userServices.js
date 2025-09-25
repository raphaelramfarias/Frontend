export async function fetchUsers() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        if (!response.ok) throw new error("Erro ao buscar os users")
            return await response.json();
    } catch(error){
            console.error(error);
            return[]
        }
    }