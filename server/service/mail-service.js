const nodemailer = require('nodemailer');

class MailService {

    constructor(){
        this.transporter = nodemailer.createTransport({
            host:process.inv.SMTP_HOST, //Google setting: switch on IMAP
            port:process.inv.SMTP_PORT,
            secure: false,
            auth: {
                user:process.inv.SMTP_SENDER,
                password:process.inv.SMTP_PASSWORD
            }
        })
    };

    async SendActivationMail(to, link) {
        await this.transporter.sendMail({
            from:process.inv.SMTP_SENDER,
            to,
            subject: 'account activation' + process.inv.APP_NAME, // or API_URI
            text:'',
            html:
                <div>
                    <h1>Welcome! This is {process.inv.APP_NAME} app. One step to finish your registration!</h1>
                    <h2>Go by link for activation your account:</h2>
                    <a href={`${link}`}>${link}</a>     
                </div>
        })
    };
}
module.exports = new MailService();