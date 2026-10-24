import {SinglePost} from 'Post.jsx';
export function PostList({posts}){
    return(
     <div>
        {posts.map( (post)=>(
           <SinglePost key={post.id} post={post} />
        ))}
     </div>
    );
}
