export const initial_state={ //exportring the initial state so other react compoenets can reach the initial state
    posts:[],
    status:'loading',
    error: 'null',
};
export function postsReducer(state,action){
    switch(action.type){
        case 'FETCH_START':
            return {...state,status:'loading'};
        case 'FETCH_SUCCESS':
            return {...state,status:'success',posts:action.payload};
        case 'FETCH_ERROR':
            return {...state,status:'error',error:action.payload};
        default:
            return state;
    }    
}
