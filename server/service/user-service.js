const UserModel = require('../models/user-model');
const uuid = require('uuid'); // it will generating random string
const bcrypt = require('bcrypt'); //it will creating hashPassword
const tokenService = require('./token-service');
const MailService = require('./mail-service'); // it service for mail massege to user 
const UserDto = require('../dtos');
const userModel = require('../models/user-model');
const ApiError = require('../errors/api-error');


class UserService {

    async registration (email, password) {
        const tryuser = await UserModel.findOne({email});
        if (tryuser) {
            throw ApiError.BadRequest(`There is user with email: ${email}`);
        }
        const hashPassword = await bcrypt(password, 3); // it will hash user password
        const activationLink = await uuid.v4(); // it will generete random string
        const user = await UserModel.create({email, password: hashPassword, activationLink});
        await MailService.SendActivationMail (email, `${process.inv.APP_URI}api/activate/${activationLink}`);
        const userDto = new UserDto(user); // UserDto give you `user`s fields we need only: id, email, isActivated 

        const tokens = tokenService.generateToken({userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }
    async activate (activationLink){
        const user = await userModel.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest('activation link is not correct');
        }
        user.isActivated = true;
        await user.save();
    }
}
module.exports = new UserService();