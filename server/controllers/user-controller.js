const userService = require('../service/user-service');


class UserController {
    async registration(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.registration(email, password);
            res.cookie('refreshToken', userData.refreshToken,{maxAge: 30*24*60*60*1000, httpOnly: true}); 
            //flag httpOnly: true fobbiden to get cookie(refreshToken) from browser
            //flag secure: false for http/true for https
            return res.json(userData);

        } catch (error) {
            console.log(error);
        }
    }
    async login (req, res, next) {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    async logout (req, res, next) {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    async activate (req, res, next) {
        try {
             const activationLink = req.params.link;
             await userService.activate(activationLink);
             //you need redirecting activationLink if server and client have different hosts
             return res.redirect(process.inv.CLIENT_URL); 
        } catch (error) {
            console.log(error);
        }
    }
    async refresh (req, res, next) {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    async getUsers (req, res, next) {
        try {
            res.json(['123','456']);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = new UserController();