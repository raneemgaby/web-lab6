import {fetchPosts} from '../postsApi.js'
export function SinglePost({post}){
    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}