const baseUrl = 'https://mern-ecommerce.sdet.school/api';
const casual = require('casual');
const superagent = require('superagent');

describe('Test newsletter sunscription endpoint', ()=>{
    let token;
    beforeEach(async()=>{
        const requestBody = {
            email: "testmail@mail.com",
            password: "password"
        }
        try {
            const response = await superagent.post(baseUrl+'/auth/login').send(requestBody);
            token = response.body.token;
        }catch(error){
            caonsole.log('ERRRRRRE')
            console.error(error);
        }
    });
it('should subscribe the user to the newsletter and show the message confirmation', async ()=>{
    let reqBody = {
        email: 'testmail@mail.com'
    }
    let response;
    try{
    const response = (await superagent.post(baseUrl+'/newsletter/subscribe')).send(reqBody);
    console.log(response.body);
    }catch(err){
        console.log('NEWSLETTER SUBSCRIPTION ERROR')
    }
    console.log(response.body);
})    
})