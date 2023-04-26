const {faker} = require('@faker-js/faker');

const randomUser = () =>{
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'password'
    };
};
const randomAddress = () =>{
    return{
        isDefault: false,
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        counry: 'USA',
        zipCode: faker.address.zipCode()
    };    
};
module.exports = {randomUser, randomAddress};


// const { faker } = require('@faker-js/faker');

// const randomUser = ()=> {
//     return {
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         email: faker.internet.email(),
//         password: "Password1"
//     }
// }

// module.exports = {randomUser};