import { fetchComments } from './services/commentsService.js';
import { fetchPosts } from './services/postService.js';
import { fetchUsers } from './services/userServices.js';
async function main() {
    try{
   //const posts = await fetchPosts();
   //console.log('Total de posts: ', posts.length)
   //const users = await fetchUsers();
   //console.log('Total de users: ', users.length)
    //const comments = await fetchComments();
    //console.log('Total de comments: ', comments.length
    const [posts, users, comments] = await Promise.all([
    fetchPosts(),
    fetchUsers(),
    fetchComments()
  ]);
  console.log('Total de posts: ', posts.length)
  console.log('Total de users: ', users.length)
  console.log('Total de comments: ', comments.length)
    }catch(error){
        console.error("Erro: ", error)
    }
}

main();