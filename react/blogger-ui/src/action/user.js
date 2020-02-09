import axios from 'axios'

export const setUsers = (users) => {
    return { type: 'SET_USERS', payload: users}
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                dispatch(setUsers(users))
            })
    }
}

export const setUserPosts = (posts) => {
    return { type: 'SET_USER_POSTS', payload: posts }
}

export const startGetPostsForUser = (id) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then((response) => {
                const posts = response.data
                dispatch(setUserPosts(posts))
            })
    }
}

export const resetUserPosts = () => {
    return { type: 'RESET_USER_POSTS' }
}