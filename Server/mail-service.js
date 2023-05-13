const nodemailer = require('nodemailer');
require("dotenv").config();

module.exports = {

    mailService: () => {
        let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'jashlukhi57@gmail.com',
                pass: 'jashlukhi57@gmail.com'
            }
        });

        let mailDetails = {
            from: 'jashlukhi57@gmail.com',
            to: 'jashlukhi007@gmail.com',
            subject: 'Sending Email SnepiTech Devloper',
            html: '<h1>Welcome</h1><p>Attendy App!</p>'
        };

        mailTransporter.sendMail(mailDetails, function (err) {
            if (err) {
                console.log('Error Occurs', err.message);
            } else {
                console.log('Email sent successfully');
            }
        })
    }
}