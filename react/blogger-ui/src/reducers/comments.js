const postCommentsInitialState = []

const postCommentsReducer = (state = postCommentsInitialState, action) => {
    switch(action.type){
        case 'SET_COMMENTS': {
            return [...action.payload]
        }
        case 'RESET_COMMENTS': {
            return postCommentsInitialState
        }
        default: {
            return [...state]
        }
    }
}

export default postCommentsReducer