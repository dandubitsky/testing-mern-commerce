const helper = require('../helper/userGenerator');
const auth = require('../client/auth');
const address = require('../client/address');

class User {
    /**
     * constructor for user class
     * @param {object} opts - params passed in;
     * @param {string} opts.email - email;
     * @param {string} opts.firstName - first name;
     * @param {string} opts.lastName - last name;
     * @param {string} opts.password - password;
     * @param {string} opts.id - user id;
     * @param {string} opts.role - user role;
     * @param {string} opts.token - user token;
     *  
     */
    constructor(opts={}){
        this.email = opts.email;
        this.firstName = opts.firstName;
        this.lastName = opts.lastName;
        this.password = opts.password;
        this.id = opts.id;
        this.role = opts.role;
        this.token = opts.token;
    }
    static async createUser(opts = {}){
        const randomUser = helper.randomUser();
        const userOpt={
            email: opts.email || randomUser.email,
            firstName: opts.firstName || randomUser.firstName,
            lastName: opts.lastName || randomUser.lastName,
            password: opts.password || randomUser.password
        };
        const response = await auth.register(userOpt);
        userOpt.id = response.body.user.id;
        userOpt.role = response.body.user.role;
        userOpt.token = response.body.token;
        return new User(userOpt);
    }
    async addAddress(opts={}){
        const randomAddress = helper.randomAddress();
        const addressOpts = {
            token: this.token,
            address: {
                isDefault: opts.isDefault || randomAddress.isDefault,
                address: opts.street || randomAddress.street,
                city: opts.city || randomAddress.city,
                state: opts.state || randomAddress.state,
                country: opts.country || randomAddress.country,
                zipCode: opts.zip || randomAddress.zipCode
            }
        };
        return address.addAddress(addressOpts);
    }
}

module.exports = {User};




// const helper = require("../helper/userGenerator");
// const auth = require("../client/auth");

// class User {
//     constructor(opts={}){
//         const randomUser = helper.randomUser();

//         this.email = opts.email || randomUser.email;
//         this.firstName = opts.firstName || randomUser.firstName;
//         this.lastName = opts.lastName || randomUser.lastName;
//         this.password = opts.password || randomUser.password;
//     }
//     async register() {
//         const resp = await auth.register({
//             email: this.email,
//             firstName: this.firstName,
//             lastName: this.lastName,
//             password: this.password
//         });
//         console.log(resp.body);
//     }

// }

// module.exports = { User}