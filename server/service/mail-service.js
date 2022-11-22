const nodemailer = require('nodemailer');

class MailService {

    constructor(){
        this.transporter = nodemailer.createTransport({
            host:process.inv.SMTP_HOST, //switch on IMAP protocol Google
            port:process.inv.SMTP_PORT,
            secure: false,
            auth: {
                user:process.inv.SMTP_USER,
                password:process.inv.SMTP_PASSWORD
            }
        })
    };

    async SendActivationMail(to, link) {
        await this.transporter.sendMail({
            from:process.inv.SMTP_USER,
            to,
            subject:'Activation of account, site' + process.inv.API_URI,
            text:'',
            html:
                <div>
                    <h1>Go by link for activation your account</h1>
                    <a href="${link}">${link}</a>     
                </div>
            ,
        })
    };
}
module.exports = new MailService();