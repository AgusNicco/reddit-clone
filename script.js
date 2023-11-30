const posts = await fetch('https://reddit-clone-api.azurewebsites.net/posts/');
console.log(posts.json());