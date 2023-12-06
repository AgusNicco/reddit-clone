function createRedditPostElement(postData) {
    // Create the main post element with the class 'post'
    const postElement = document.createElement('div');
    postElement.className = 'post';

    // Create the post content container
    const postContent = document.createElement('div');
    postContent.className = 'post-content';

    // Create and append the post header with author and subreddit
    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';
    const authorElement = document.createElement('span');
    authorElement.className = 'author';
    authorElement.textContent = `Posted by u/${postData.author}`;
    const subredditElement = document.createElement('span');
    subredditElement.className = 'post-category';
    subredditElement.textContent = `r/${postData.subreddit}`;
    postHeader.appendChild(authorElement);
    postHeader.appendChild(subredditElement);

    // Append the post header to the post content
    postContent.appendChild(postHeader);

    // Create and append the post title
    const postTitle = document.createElement('h2');
    postTitle.className = 'post-title';
    postTitle.textContent = postData.summary; // Use the summary as the title
    postContent.appendChild(postTitle); // Append after the post header

    // Create and append the post body
    const postBody = document.createElement('div');
    postBody.className = 'post-body';
    const bodyText = document.createElement('p');
    bodyText.textContent = postData.body;
    postBody.appendChild(bodyText);

    // Append the post body to the post content
    postContent.appendChild(postBody);

    // Create and append the post footer
    const postFooter = document.createElement('div');
    postFooter.className = 'post-footer';
    const commentsLink = document.createElement('a');
    // commentsLink.href = '#';
    commentsLink.className = 'comments-link';
    commentsLink.textContent = `${postData.comments} comments`;
    postFooter.appendChild(commentsLink);

    // Append the post footer to the post content
    postContent.appendChild(postFooter);

    // Create the voting container
    const voteContainer = document.createElement('div');
    voteContainer.className = 'post-vote';
    const upvoteButton = document.createElement('button');
    upvoteButton.className = 'upvote';
    upvoteButton.textContent = '⬆️';
    voteContainer.appendChild(upvoteButton);
    const votesCount = document.createElement('div');
    votesCount.className = 'votes-count';
    votesCount.textContent = postData.upvotes;
    voteContainer.appendChild(votesCount);
    const downvoteButton = document.createElement('button');
    downvoteButton.className = 'downvote';
    downvoteButton.textContent = '⬇️';
    voteContainer.appendChild(downvoteButton);

    // Append the vote container and post content to the main post element
    postElement.appendChild(voteContainer);
    postElement.appendChild(postContent);

    // Return the complete post element
    return postElement;
}


function populatePostContainer(posts, container) {

    container.innerHTML = ''; 
    posts.forEach((redditPost) => {
        const postElement = createRedditPostElement(redditPost);
        container.appendChild(postElement);
    });
}


function getGoBackHomeButton() {
    const button = document.createElement('button');
    button.className = 'go-back-home';
    button.textContent = 'Go Back Home'; 
    // go to /home
    button.addEventListener('click', () => {
        window.location.href = '/';
    });
    return button;
}




const ui = {
    createRedditPostElement,
    populatePostContainer,
    getGoBackHomeButton
}
export default ui;