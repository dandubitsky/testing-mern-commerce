// const chai = require('chai');
// const superagent = require('superagent');
// const expect = chai.expect;
// const baseUrl = 'https://mern-ecommerce.sdet.school/api';

// describe('GET category by Id', () => {
//     let token;
//     beforeEach(async () => {
//         const reqBody = {
//             email: 'testmail@mail.com',
//             password: 'password'
//         }
//         try {
//             const reponse = await superagent.post(baseUrl + '/auth/login').send(reqBody);
//             token = response.body.token;
//         } catch (error) {
//             console.log('catch?');
//             console.error(error.message);
//         }
//     });

// it('should return category by id', async()=>{
//     let categId = '63a52c00873c300037f22e7d';
//     try{
//         response = await superagent.get(baseUrl+'/category/'+categId);
//     }catch(error){
//         console.log('ERRRRRROR');
//         console.log(error.message);
//     }
//     expect(response.body.category).to.have.property('_id').to.equal('63a52c00873c300037f22e7d');
//     //console.log(response.body);
// })


// });
