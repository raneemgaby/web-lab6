import {SinglePost} from './Post.jsx'
function rendering({posts}){
    return(
     <div>
        {posts.map( (post)=>{
           <SinglePost key={post.id} post={post} />
        })}
     </div>
    );
}