import svc from "/services/svc.js";
import ui from "/ui/ui.js";

async function expandPostContainer(container) {
    const newPosts = await svc.fetchPosts();
    newPosts.forEach((redditPost) => {
        const postElement = ui.createRedditPostElement(redditPost);
        container.appendChild(postElement);
    });
}

function isAtBottom() {
    const tolerance = 100; 
    const scrollPosition = window.innerHeight + window.scrollY;
    const bottomPosition = document.body.offsetHeight;
    return (bottomPosition - scrollPosition) < tolerance;
}

const debouncedScrollHandler = () => {
    if (isAtBottom()) {
        const postsContainer = document.getElementById('posts-container');
        expandPostContainer(postsContainer);
    }
};

async function submitSearchHandler(event) {
    event.preventDefault();
    window.removeEventListener('scroll', domain.debouncedScrollHandler);
    const searchBar = document.getElementById('search-bar');
    const searchTerm = searchBar.value;
    if (window.location.pathname !== '/index.html') {
        window.location.href = '/index.html?search=' + searchTerm;
    }
    console.log(searchTerm);
    const posts = await svc.fetchSearch(searchTerm);
    console.log(posts);
    const postsContainer = document.getElementById('posts-container');
    if (posts.length === 0) {
        postsContainer.innerHTML = 'No results found';
    }
    else {
        ui.populatePostContainer(posts, postsContainer);
    }
    const goBackHomeButton = ui.getGoBackHomeButton();
    postsContainer.appendChild(goBackHomeButton); 
}

async function search(term) {
    const posts = await svc.fetchSearch(term);
    console.log(posts);
    const postsContainer = document.getElementById('posts-container');
    if (posts.length === 0) {
        postsContainer.innerHTML = 'No results found';
    }
    else {
        ui.populatePostContainer(posts, postsContainer);
    }
    const goBackHomeButton = ui.getGoBackHomeButton();
    postsContainer.appendChild(goBackHomeButton); 
}

function makeSearchBarDroppable() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    searchBar.addEventListener('drop', (event) =>{
        event.preventDefault(); 
        const data = event.dataTransfer.getData('id');
        window.location.href = "/post.html?id="+data; 
        console.log(data);             
    });
}

const domain = {
    debouncedScrollHandler,
    submitSearchHandler,
    search,
    makeSearchBarDroppable
}
export default domain;

