import axios from 'axios'

export const setComments = (comments) => {
    return { type: 'SET_COMMENTS', payload: comments }
}

export const startGetPostComments = (postId) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => {
                const comments = response.data
                dispatch(setComments(comments))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const resetComments = () => {
    return { type: 'RESET_COMMENTS' }
}