const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

require('dotenv').config()

const { ID_CLIENTE, SECRETO_CLIENTE, REFRESH_TOKEN } = process.env
const {defaultTemplate} = require('./templates/index')



/**
 * 
 * @param {{to: string, title:string, subject: string, html: {name: string}}} email 
 * @param {*} querys 
 */
const sendMail = async (email, querys) => {

    const accessTransport = {
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: true, // true for 465, false for other ports
        auth: {
            type: 'OAuth2',
            user: 'proyecto.complex.gym@gmail.com',
            clientId: ID_CLIENTE, //CLIENTID
            clientSecret: SECRETO_CLIENTE, //CLIENTSECRET
            refreshToken: REFRESH_TOKEN //REFRESHTOKEN
        },
    }

    const OAuth2Client = new OAuth2(
        ID_CLIENTE, //CLIENTID
        SECRETO_CLIENTE, //CLIENTSECRET
        'https://developers.google.com/oauthplayground/'
    )

    OAuth2Client.setCredentials({
        refresh_token: REFRESH_TOKEN, //REFRESHTOKEN
        tls: {
            rejectUnauthorized: false
        }
    })

    OAuth2Client.getAccessToken(async (err, token) => {
        if (err) return console.log(err)
        accessTransport.auth.accessToken = token

        let transporter = nodemailer.createTransport(accessTransport);

        transporter.verify().then(() => console.log('logueado')).catch((e) => console.log('un error en verify: ', e.message))

        try {
            let info = await transporter.sendMail({
                from: `"${email.title}" <proyecto.complex.gym@gmail.com>`, // sender address
                to: email.to, // list of receivers
                subject: email.subject, // Subject line
                // text: "email desde nodemailer", // plain text body
                html: defaultTemplate(email.html.name), // html body
            });

            console.log("Message sent: %s", info.messageId);
        } catch (error) {
            console.log('un error en el envio : ', error.message)
        }
    })
}

module.exports = sendMail