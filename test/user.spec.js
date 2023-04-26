/* eslint-disable no-undef */
const { User } = require('../src/users/user');

describe.skip('Test API call to create a user', () => {



    it('should create a new user', async () => {
        const user = await User.createUser();
        const addressResponse = await user.addAddress();

        console.log(user);
        console.log(addressResponse.body);
    });
    
});