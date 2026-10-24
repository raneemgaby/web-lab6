export const initial_state={ //exportring the initial state so other react compoenets can reach the initial state
    posts:[],
    loading:false,
    error: null
}
function postsReducer(state,action){
    switch(action.type){
        case 'FETCH_START':
            return {...state,status:'loading'};
        case 'FETCH_SUCCESS':
            return {...state,status:'success',data:action.paload};
        case 'FETCH_ERROR':
            return {...state,status:'error',error:action.payload};
        defualt:
            return state;
    }    
    return state
}