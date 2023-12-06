function createRedditPostElement(postData) {
    // Create the main post element with the class 'post'
    const postElement = document.createElement('article');
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
    bodyText.textContent = trimString(postData.body, 400);
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

    // Create upvote anchor and image
    const upvoteAnchor = document.createElement('a');
    // upvoteAnchor.href = '#'; 
    const upvoteImage = document.createElement('img');
    upvoteImage.src = '/images/upvote.png';
    upvoteImage.alt = 'Upvote';
    upvoteAnchor.appendChild(upvoteImage);
    voteContainer.appendChild(upvoteAnchor);

    // Display the votes count
    const votesCount = document.createElement('div');
    votesCount.className = 'votes-count';
    votesCount.textContent = postData.upvotes;
    voteContainer.appendChild(votesCount);

    // Create downvote anchor and image
    const downvoteAnchor = document.createElement('a');
    // downvoteAnchor.href = '#';
    const downvoteImage = document.createElement('img');
    downvoteImage.src = '/images/downvote.png';
    downvoteImage.alt = 'Downvote';
    downvoteAnchor.appendChild(downvoteImage);
    voteContainer.appendChild(downvoteAnchor);


    // Append the vote container and post content to the main post element
    postElement.appendChild(voteContainer);
    postElement.appendChild(postContent);

    postElement.addEventListener('click', () => {
        window.location.href = '/post.html?id=' + postData.id;
    });
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


function createSinglePostElement(postData) {
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
    postTitle.textContent = postData.summary; 
    postContent.appendChild(postTitle); 

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

    // Create upvote anchor and image
    const upvoteAnchor = document.createElement('a');
    // upvoteAnchor.href = '#'; 
    const upvoteImage = document.createElement('img');
    upvoteImage.src = '/images/upvote.png';
    upvoteImage.alt = 'Upvote';
    upvoteAnchor.appendChild(upvoteImage);
    voteContainer.appendChild(upvoteAnchor);

    // Display the votes count
    const votesCount = document.createElement('div');
    votesCount.className = 'votes-count';
    votesCount.textContent = postData.upvotes;
    voteContainer.appendChild(votesCount);

    // Create downvote anchor and image
    const downvoteAnchor = document.createElement('a');
    // downvoteAnchor.href = '#'; 
    const downvoteImage = document.createElement('img');
    downvoteImage.src = '/images/downvote.png';
    downvoteImage.alt = 'Downvote';
    downvoteAnchor.appendChild(downvoteImage);
    voteContainer.appendChild(downvoteAnchor);

    // Append the vote container and post content to the main post element
    postElement.appendChild(voteContainer);
    postElement.appendChild(postContent);

    // Return the complete post element
    return postElement;

}


function trimString(inputString, maxLength) {
    if (inputString.length <= maxLength) {
        return inputString;
    } else {
        return inputString.slice(0, maxLength) + '...';
    }
}


function getGoBackHomeButton() {
    const button = document.createElement('button');
    button.className = 'go-back-home';
    button.textContent = 'Go Back Home';
    button.addEventListener('click', () => {
        window.location.href = '/';
    });
    return button;
}


const ui = {
    createRedditPostElement,
    populatePostContainer,
    getGoBackHomeButton,
    createSinglePostElement
}
export default ui;