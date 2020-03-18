export const findUserById = (users, uid) => {
    const user = users.find((user) => {
        return user.id == uid
    })
    return user
}
