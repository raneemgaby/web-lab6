function fetchPosts(){
    const data=fetch('<https://jsonplaceholder.typicode.com/posts>').then("Fetch Falid.");
    return parsedJSON=data.json(); 