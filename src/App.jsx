import { fetchPosts } from './api/postsApi.js';
import { useEffect, useReducer } from 'react';
import { PostForm } from './components/FilterForm.jsx';
import { initial_state, postsReducer } from './reducer/postsReducer.js';
import { PostList } from 'PostList.jsx';

export function App(){
  const[state,dispatch]=useReducer(postsReducer,initial_state);
  useEffect( ()=> {
    async function loadData(){
      dispatch({type:'FETCH_START'});
      try{
        const posts=await fetchPosts();
        dispatch({type:'FETCH_SUCCESS',payload:posts});
      }catch(error){
        dispatch({type:'FETCH_ERROR',payload:error.message});
      }
    } loadData();
  },[]);

  return(
    <div>
      {state.status==='loading' && <p>Loading posts...</p>}
      {state.status==='error' && <p>Error: Could not fetch the data.</p>}
      {state.status==='success' && state.posts.length===0 && <p>No posts found.</p>}
      {state.status==='success'&& state.posts.length > 0 &&(
        <>
          <PostForm/>
          <PostList posts={state.posts}/>
        </>
      )}
     
    </div>
  );
}