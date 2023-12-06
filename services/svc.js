
async function fetchPosts() {
    const index = getIndexFromLocalStorage();
    const response = await fetch('https://reddit-clone-api.azurewebsites.net/posts/'+index.toString());
    const posts = await response.json();
    posts.map((post) => { 
        post.comments = Math.floor(Math.random() * 21);
    });
    return posts;
}

async function fetchSearch(searchTerm) {
    const response = await fetch('https://reddit-clone-api.azurewebsites.net/search/'+searchTerm);
    const posts = await response.json();
    posts.map((post) => { 
        post.comments = Math.floor(Math.random() * 21);
    });
    return posts;
}

// retrieve the index from localStorage and also update it
function getIndexFromLocalStorage() {
    let index = parseInt(localStorage.getItem('post-index'), 10);
    if (isNaN(index)) {
        index = 0; 
    }
    localStorage.setItem('post-index', (index+1).toString());
    return index;
}

const svc = {
    fetchPosts,
    fetchSearch
}
export default svc;