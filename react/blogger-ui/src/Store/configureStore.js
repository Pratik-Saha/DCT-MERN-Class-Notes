import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usersReducer from '../reducers/user'
import postsReducer from '../reducers/post'
import userPostsReducer from '../reducers/userPosts'


const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        userPosts: userPostsReducer,
        posts: postsReducer
    }), applyMiddleware(thunk))

    return store
}



export default configureStore