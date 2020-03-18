import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usersReducer from '../reducers/user'
import postsReducer from '../reducers/post'
import postCommentsReducer from '../reducers/comments'

const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        posts: postsReducer,
        postComments: postCommentsReducer
    }), applyMiddleware(thunk))

    return store
}



export default configureStore