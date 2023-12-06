import svc from "/services/svc.js";
import ui from "/ui/ui.js";
import domain from "/domain/domain.js";

const posts = await svc.fetchPosts();
console.log(posts);
const postsContainer = document.getElementById("posts-container");

ui.populatePostContainer(posts, postsContainer);
window.addEventListener('scroll', domain.debouncedScrollHandler);
document.getElementById('search-form').addEventListener('submit', domain.submitSearchHandler);
