const UserModel = require('../models/user-model');
const uuid = require('uuid'); // it will generating random string
const bcrypt = require('bcrypt'); //it will creating hashPassword
const tokenService = require('./token-service');
const MailService = require('./mail-service'); // it service for mail massege to user 
const UserDto = require('./dtos');


class UserService {

    async registration (email, password) {
        const newuser = await UserModel.findOne({email});
        if (newuser) {
            throw new Error(`There is user with email: ${email}`);
        }
        const hashPassword = await bcrypt(password, 3); //creating hashPassword
        const activationLink = await uuid.v4(); // genereting random string
        const user = await UserModel.create({email, password: hashPassword, activationLink});
        await MailService.SendActivationMail (email, activationLink);

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, user: userDto}
    }
}
module.exports = new UserService();