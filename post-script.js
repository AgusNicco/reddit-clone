import svc from "/services/svc.js";
import ui from "/ui/ui.js";
import domain from "/domain/domain.js";


document.getElementById('search-form').addEventListener('submit', domain.submitSearchHandler);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const postID = urlParams.get('id');
console.log(postID);
const post = await svc.fetchPostByID(postID);
console.log(post);

const postContainer = document.getElementById('single-post-container');
const postElement = ui.createSinglePostElement(post);
postContainer.appendChild(postElement);