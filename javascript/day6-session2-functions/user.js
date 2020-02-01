//always pass parameter as an object to your constructor function
function User(args){
    this.username = args.username,
    this.email = args.email
}

const u1 = new User({username: 'user1', email: 'u1@gmail.com'})

console.log(u1.username) //'user1'
console.log(u1.email) //'u1@gmail.com'

const u2 = new User({email: 'u2@gmail.com',username: 'user2',})
console.log(u2.username) //'user2'
console.log(u2.email)