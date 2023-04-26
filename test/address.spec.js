/* eslint-disable no-undef */
const chai = require('chai');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const expect = chai.expect;
const casual = require('casual');
const clientAddress = require('../src/client/address'); //
//const { User } = require("../src/users/user")
const baseUrl = 'https://mern-ecommerce.sdet.school/api';
const superagent = require('superagent');
const clientAuth = require('../src/client/auth');
const { street, city, state } = casual;


describe.skip('Test address endpoints', () => {
    let token;
    beforeEach(async () => {
        const reqBody = {
            email: 'testmail@mail.com',
            password: 'password'
        };
        try {
            const response = await clientAuth.login(reqBody);
            token = response.body.token;
        } catch (error) {
            console.error(error.message);
        }
    });

    it('should add address to the user profile', async () => {
        const zip = casual.zip(5);
        const addressOpt = {
            isDefault: true,
            adress: street,
            city: city,
            state: state,
            country: 'US',
            zipCode: zip
        };
        let response;
        const opts = {
            token,
            address: addressOpt
        };
        try {
            response = await clientAddress.addAddress(opts);
        } catch (error) {
            console.error(error.message);
        }
        expect(response.body).to.have.property('message').to.equal('Address has been added successfully!');
    });
    //console.log(response.body)


    it('should GET list of addresses', async () => {
        let response;
        try {
            response = await superagent.get(baseUrl + '/address').set({ Authorization: token });
        } catch (error) {
            console.log('API CALL ERROR');
            console.error(error.message);
        }
        console.log(response);
    });

    it('should get adress by id', async () => {
        let response;
        const addressId = '643c00677bc80f00367426af';
        try {
            response = await superagent.get(baseUrl + '/address/' + addressId).set({ Authorization: token });
        } catch (error) {
            console.log('GET ADDRESS BY ID ERROR');
            console.error(error.message);
        }
        //console.log(response.body)
        expect(response.body.address).to.have.property('_id').to.be.equal(addressId);
    });

    it('should delete address by id', async () => {
        let response;
        const addressId = '643c00677bc80f00367426af';
        try {
            response = await superagent.delete(baseUrl + '/address/delete/' + addressId).set({ Authorization: token });
        } catch (error) {
            console.log('DELETE ADDRESS ERROR');
            console.error(error.message);
        }
        console.log(response.body);
        expect(response.body).to.have.property('message').to.be.equal('Address has been deleted successfully!');
    });

  
});
























//     it("should add address to user",async () =>{
//         const {street,city,state} = casual;
//         const zip = casual.zip(5)
//         const addressOpt = {
//           isDefault: true,
//           address: street,
//           city: city,
//           state: state,
//           country: "US",
//           zipCode: zip,
//         }
//         let response
//         const opts = {
//           token,
//           address: addressOpt
//         }
//         try {
//           response = await clientAddress.addAddress(opts)
//         } catch(err){
//           console.log(err.message)
//         }
//         expect(response.body).to.containSubset({
//           success: true,
//           message: 'Address has been added successfully!',
//           address: {
//             isDefault: true,
//             address: street,
//             city: city,
//             state: state,
//             country: 'US',
//             zipCode: zip,
//             user: '6434b87a3ea9a80035112c5f',
//             __v: 0
//           }
//         });
//     });
//     it("should register user", async()=>{
//       const opts = {
//         "email": "user111111111111@email.com",
//         "firstName": "Harold",
//         "lastName": "Olsen",
//         "password": "Password1"
//       }
//       let response;
//       try {
//         response = await clientAuth.register(opts)
//       } catch(err){
//         console.log(err)
//       }
//       console.log(response)
//     })
//     it.only("should create a User",async()=>{
//       const user = new User();
//       await user.register();
//     })

