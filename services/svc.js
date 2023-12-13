async function fetchPosts() {
    const index = getIndexFromLocalStorage();
    const response = await fetch('https://reddit-clone-api.azurewebsites.net/posts/'+index.toString());
    let posts = await response.json();
    posts.map((post) => { 
        post.comments = Math.floor(Math.random() * 21);
    });
    posts = posts.filter((post) => {
        return post.author !== "[deleted]";
    });
    return posts;
}

async function fetchSearch(searchTerm) {
    const response = await fetch('https://reddit-clone-api.azurewebsites.net/search/'+searchTerm);
    const posts = await response.json();
    // if posts is object
    if (posts)
        posts.map((post) => { 
            post.comments = Math.floor(Math.random() * 21);
        });
    return posts;
}

async function fetchPostByID(postID) {
    const response = await fetch('https://reddit-clone-api.azurewebsites.net/post/'+postID);
    const post = await response.json();
    post.comments = Math.floor(Math.random() * 21);
    return post;
}

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
    fetchSearch,
    fetchPostByID
}
export default svc;