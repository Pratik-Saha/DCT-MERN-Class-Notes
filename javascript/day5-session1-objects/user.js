//http://jsonplaceholder.typicode.com/users/1
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

console.log(user.name) //'Leanne Graham'
console.log(user.email) //'Sincere@april.biz'
console.log(user.address.city) //'Gwenborough'
console.log(user['address']['city']) //'Gwenborough'
console.log(user.address.geo.lat) //'-37.3159'
console.log(user.address.geo.lng) // //'81.1496'

function getUserInfo(user) {
    const name = user.name
    const email = user.email
    const city = user.address.city
    const lat = user.address.geo.lat
    const lng = user.address.geo.lng
    const company = user.company.name
    return `${name}, ${email}, ${city}(${lat}, ${lng}), ${company}`
}

console.log(getUserInfo(user))