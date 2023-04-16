// const baseUrl = 'https://mern-ecommerce.sdet.school/api';
// const casual = require('casual');
// const superagent = require('superagent');

// describe('Test newsletter sunscription endpoint', ()=>{
//     let token;
//     beforeEach(async()=>{
//         const requestBody = {
//             email: "testmail@mail.com",
//             password: "password"
//         }
//         try {
//             const response = await superagent.post(baseUrl+'/auth/login').send(requestBody);
//             token = response.body;
//         }catch(error){
//             console.error(error);
//         }
//     });
// it('should subscribe the user to the newsleter and show the message confirmation', async ()=>{
//     const uri = 'https://mern-ecommerce.sdet.school/api/newsletter/subscribe';
//     const res = await superagent.get(uri);
//     console.log(res.body)
// })    
// })