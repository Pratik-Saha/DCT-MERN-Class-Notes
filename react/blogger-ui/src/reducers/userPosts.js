const userPostsInitialState = []

const userPostsReducer = (state = userPostsInitialState, action) => {
    switch(action.type){
        case 'SET_USER_POSTS':{
            return [...action.payload]
        }
        case 'RESET_USER_POSTS': {
            return userPostsInitialState
        }
        default: {
            return [...state]
        }
    }
}

export default userPostsReducer