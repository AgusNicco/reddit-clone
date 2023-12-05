function createRedditPostElement(postData) {
    // Create the main post element with the class 'post'
    const postElement = document.createElement('div');
    postElement.className = 'post';

    // Create the voting container
    const voteContainer = document.createElement('div');
    voteContainer.className = 'post-vote';

    // Create and append the upvote button
    const upvoteButton = document.createElement('button');
    upvoteButton.className = 'upvote';
    upvoteButton.textContent = '⬆️';
    voteContainer.appendChild(upvoteButton);

    // Create and append the votes count
    const votesCount = document.createElement('div');
    votesCount.className = 'votes-count';
    votesCount.textContent = postData.upvotes;
    voteContainer.appendChild(votesCount);

    // Create and append the downvote button
    const downvoteButton = document.createElement('button');
    downvoteButton.className = 'downvote';
    downvoteButton.textContent = '⬇️';
    voteContainer.appendChild(downvoteButton);

    // Create the post content container
    const postContent = document.createElement('div');
    postContent.className = 'post-content';

    // Create and append the post header
    const postHeader = document.createElement('div');
    postHeader.className = 'post-header';

    // Append the author to the post header
    const authorElement = document.createElement('span');
    authorElement.className = 'author';
    authorElement.textContent = `Posted by u/${postData.author}`;
    postHeader.appendChild(authorElement);

    // Append the subreddit to the post header
    const subredditElement = document.createElement('span');
    subredditElement.className = 'post-category';
    subredditElement.textContent = `r/${postData.subreddit}`;
    postHeader.appendChild(subredditElement);

    // Append the post header to the post content
    postContent.appendChild(postHeader);

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

    // Append a comments link to the footer
    const commentsLink = document.createElement('a');
    commentsLink.href = '#';
    commentsLink.className = 'comments-link';
    commentsLink.textContent = '3 comments'; // This would be dynamic based on the actual data
    postFooter.appendChild(commentsLink);

    // Append other footer elements like share, save, etc. here

    // Append the post footer to the post content
    postContent.appendChild(postFooter);

    // Append the vote container and post content to the main post element
    postElement.appendChild(voteContainer);
    postElement.appendChild(postContent);

    // Return the complete post element
    return postElement;
}


function populatePostContainer (posts, container) 
{
    posts.forEach((redditPost)=>{
        const postElement = createRedditPostElement(redditPost);
        container.appendChild(postElement);
    });
}




const ui = {
    createRedditPostElement,
    populatePostContainer
}
export default ui;