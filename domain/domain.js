import svc from "/services/svc.js";
import ui from "/ui/ui.js";

async function expandPostContainer(container) {
    const newPosts = await svc.fetchPosts();
    newPosts.forEach((redditPost) => {
        const postElement = ui.createRedditPostElement(redditPost);
        container.appendChild(postElement);
    });
}

// checks if the user has scrolled to the bottom of the page
function isAtBottom() {
    const tolerance = 100; // How close to the bottom
    const scrollPosition = window.innerHeight + window.scrollY;
    const bottomPosition = document.body.offsetHeight;
    return (bottomPosition - scrollPosition) < tolerance;
}

// called when user scrolls
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

const domain = {
    debouncedScrollHandler,
    submitSearchHandler,
    search
}
export default domain;

