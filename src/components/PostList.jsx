import {SinglePost} from 'Post.jsx';
export function PostList({posts}){ //Maping the posts according to their Id
    return(
     <div>
        {posts.map( (post)=>(
           <SinglePost key={post.id} post={post} />
        ))}
     </div>
    );
}
