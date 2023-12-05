import svc from "/services/svc.js";
import ui from "/ui/ui.js";

const posts = await svc.fetchPosts();
console.log(posts);
const postsContainer = document.getElementById("posts-container");

ui.populatePostContainer(posts, postsContainer);
