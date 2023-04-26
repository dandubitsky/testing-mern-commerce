/* eslint-disable no-undef */
const baseUrl = 'https://mern-ecommerce.sdet.school/api';
const superagent = require('superagent');
const chai = require('chai');
const expect = chai.expect;

describe.skip('Test newsletter sunscription endpoint', () => {
    beforeEach(async () => {
        const requestBody = {
            email: 'testmail@mail.com',
            password: 'password'
        };
        try {
            const response = await superagent.post(baseUrl + '/auth/login').send(requestBody);
            token = response.body.token;
        } catch (error) {
            caonsole.log('ERRRRRRE');
            console.error(error);
        }
    });
    it('should subscribe the user to the newsletter and show the message confirmation', async () => {
        let reqBody = {
            email: 'testmail@mail.com'
        };
        let response;
        try {
            response = await superagent.post(baseUrl + '/newsletter/subscribe').send(reqBody);
            console.log(response.body);
            //expect(response.body).to.have.property('message').to.be.equal('You have successfully subscribed to the newsletter');
            //console.log(response.body)
        } catch (err) {
            console.log('NEWSLETTER SUBSCRIPTION ERROR');
        }
        expect(response.body).to.have.property('message').to.be.equal('You have successfully subscribed to the newsletter');
    });
});