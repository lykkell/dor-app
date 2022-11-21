const UserModel = require('../models/user-model');

class UserService {

    async registration (email, password) {
        const newuser = await UserModel.findOne({email});
        if (newuser) {
            throw new Error('There is user with email: ${email}');
        }
        const user = await UserModel.create({email, password});
    }
}
module.exports = new UserService();