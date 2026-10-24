import { fetchPosts } from "./postApp";
function rendering({fetchPosts}){
  <card>
    <ul>
        {DataTransfer.map( (post)=>( 
            posts key={post.id} post={post}
        ))}
    </ul>;
  </card>
}