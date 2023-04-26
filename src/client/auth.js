const superagent = require('superagent');
const baseUrl = 'https://mern-ecommerce.sdet.school/api';
/**
 * Adding address to a user profile;
 * 
 * @param {object} opts - params passed in;
 * @param {string} opts.email - users email'; 
 * @param {object} opts.password - users address;
 * 
 * @returns {Promise<object>};
 */
const login = (opts)=>{
    if(opts.email === null || opts.password === null){
        throw new Error('login: required parameter not passed');
    }
    const body = {
        email: opts.email,
        password: opts.password
    };
    return superagent.post(baseUrl+'/auth/login').send(body);
};

/**
 * Register a new user
 * 
 * @param {object} userInfo
 * @param {boolean} [userInfo.isSubscribed] //Square breckets means that parameter is optional. False by default
 * @param {string} userInfo.email - user's email;
 * @param {string} userInfo.firstName - first name;
 * @param {string} userInfo.lastName - last name;
 * @param {string} userInfo.password = user's password;
 * 
 * @returns {Promise<object>};
 */
const register = (userInfo)=>{
    return superagent.post(baseUrl+'/auth/register').send(userInfo);
};
console.log(register);

module.exports = {login, register};