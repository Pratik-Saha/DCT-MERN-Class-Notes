export const findPostByPostId = (posts, postId) => {
    const post = posts.find((post) => {
        return post.id == postId
    })
    return post
}

export const findPostsByUserId = (posts, userId) => {
    const userPosts = posts.filter((post) => {
        return post.userId == userId
    })
    return userPosts
}