const faker = require('faker')

const FakeUser = require('../models/FakeUser')

module.exports.create = (req, res) => {
    const records = 50
    let fakeUsers = []
    for(let i = 0; i < records; i++){
        const fakeUser = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            address: faker.address.city(),
            company: faker.company.companyName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber()
        }
        fakeUsers.push(fakeUser)
    }
    FakeUser.insertMany(fakeUsers)
        .then((fakeUsers) => {
            res.json({
                status: 'records inserted successfully'
            })
        })
        .catch((err) => {
            res.json(err)
        })
}