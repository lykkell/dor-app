const UserModel = require('../models/user-model');
const uuid = require('uuid'); // it will generating random string
const bcrypt = require('bcrypt'); //it will us hashPassword

class UserService {

    async registration (email, password) {
        const newuser = await UserModel.findOne({email});
        if (newuser) {
            throw new Error(`There is user with email: ${email}`);
        }
        const hashPassword = await bcrypt(password, 3);
        const activationLink = await uuid.v4(); // genereting random string
        const user = await UserModel.create({email, password: hashPassword, activationLink});
    }
}
module.exports = new UserService();