import {fetchPosts} from './postApi'
import { useReducer, useState } from 'react'
export async function triggeringData(){
  try{
    useEffect( ()=>{
      const data=fetchPosts()
      setStatus('loading')
      dispatchEvent({type:'FECTH_START'});
      print("Loading posts...")
      setStatus('success')
      dispatchEvent({type:'FETCH_SUCCESS'});
      data=[" "]?"No posts found.":dispatchEvent(useReducer)
    }),[];
  }
  catch{
    setStatus('FETCH_ERROR')
    dispatchEvent({type:'FETCH_ERROR'});
    print("Error.Couldn't Fetch The Data.")
  }
}
    
