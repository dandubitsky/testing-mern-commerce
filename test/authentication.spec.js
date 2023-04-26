/* eslint-disable no-undef */
const superagent = require('superagent');
const baseUrl = 'https://mern-ecommerce.sdet.school/api';
const chai = require('chai');
const expect = chai.expect;
const casual = require('casual');
const { email, first_name, last_name } = casual;
const clientAuth = require('../src/client/auth');


describe.skip('Authentication endpoint test', () => {
    beforeEach(async () => {
        const reqBody = {
            email: 'testmail@mail.com',
            password: 'password'
        };
        try {
            const response = await superagent.post(baseUrl + '/auth/login').send(reqBody);
            token = response.body.token;
        } catch (error) {
            console.log(error.message);
        }
    });

    it('should register a new user', async()=>{
        const opts={
            isSubscribed: true,
            email: email,
            firstName: first_name,
            lastName: last_name,
            password: 'password'
        };
        let response;
        try{
            response = await clientAuth.register(opts);
        }catch(error){
            console.error(error);
        }
        expect(response.body).to.have.property('success').to.be.true;
        //console.log(response.body);
    });
});