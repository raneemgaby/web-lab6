import { fetchPosts } from './api/postsApi.js';
import { useEffect, useReducer,useState } from 'react';
import { PostForm } from './components/FilterForm.jsx';
import { initial_state, postsReducer } from './reducer/postsReducer.js';
import { PostList } from 'PostList.jsx';

export function App(){
  const[state,dispatch]=useReducer(postsReducer,initial_state); //userReducer initialise all the states in one step 
  useEffect( ()=> {  //2.Secondly run the useEffect
    async function loadData(){
      dispatch({type:'FETCH_START'});
      try{
        const posts=await fetchPosts();
        dispatch({type:'FETCH_SUCCESS',payload:posts});
      }catch(error){
        dispatch({type:'FETCH_ERROR',payload:error.message}); //4.Catching error if encountered
      }
    } loadData();  //3.Recursion to trigger the fetched data when the component loads
  },[]);
  const[filterText,setFilterText]=useState(''); //to handle the user entered inputs
  const filteredPosts=state.posts.filter(post =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  )
  return( // 1.First rendering the current state
    <div>
      {state.status==='loading' && <p>Loading posts...</p>}
      {state.status==='error' && <p>Error: Could not fetch the data.</p>}
      {state.status==='success' && state.posts.length===0 && <p>No posts found.</p>}
      {state.status==='success'&& state.posts.length > 0 &&(
        <>
          <PostForm
            filterText={filterText}
            onFilterChange={setFilterText}
          />
          <PostList posts={filteredPosts}/>
        </>
      )}
     
    </div>
  );
}
