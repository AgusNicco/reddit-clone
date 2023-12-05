

async function fetchPosts()
{
   const response = await fetch('https://reddit-clone-api.azurewebsites.net/posts/'); 
    const posts = await response.json();
    return posts;
}

const svc = {
    fetchPosts
}
export default svc;