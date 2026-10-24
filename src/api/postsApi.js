export async function fetchPosts(){
    const data=await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!data.ok){
        throw new Error("Fetch Failed.")
    }
    return await data.json();
}