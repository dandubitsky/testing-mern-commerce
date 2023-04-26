// const superagent = require('superagent');
// const baseUrl = 'https://mern-ecommerce.sdet.school/api';
// const chai = require('chai');
// const expect = chai.expect;

// describe('Test address endpoints', ()=>{
//     let token;
//     beforeEach(async ()=>{
//         const reqBody = {
//             email: 'testmail@mail.com',
//             password: 'password'
//         }
//         try{
//             const response = await superagent.post(baseUrl+'/auth/login').send(reqBody);
//             token = response.body.token;
//         }catch(error){
//             console.log('AUTHORIZATION ERROR');
//             console.error(error.message);
//         }
//     });
    
    

//     it('should get adress by id', async()=>{
//         let response;
//         const addressId = '643c00677bc80f00367426af';
//         try{
//             response = await superagent.get(baseUrl+'/address/'+addressId).set({Authorization: token});
//         }catch(error){
//             console.log('GET ADDRESS BY ID ERROR');
//             console.error(error.message);
//         }
//         //console.log(response.body)
//         expect(response.body.address).to.have.property('_id').to.be.equal(addressId);
//     });

//     it('should delete address by id', async()=>{
//         let response;
//         const addressId = '643c00677bc80f00367426af';
//         try{
//             response = await superagent.delete(baseUrl+'/address/delete/'+addressId).set({Authorization: token});
//         }catch(error){
//             console.log('DELETE ADDRESS ERROR');
//             console.error(error.message);
//         }
//         console.log(response.body)
//         expect(response.body).to.have.property('message').to.be.equal('Address has been deleted successfully!');
//     });
// })