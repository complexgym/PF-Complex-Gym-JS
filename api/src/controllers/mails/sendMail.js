const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

require('dotenv').config()

const { ID_CLIENTE, SECRETO_CLIENTE, REFRESH_TOKEN } = process.env
const {templateRegister, templateNotificationMP, templateReview} = require('./templates/index')



/**
 * 
 * @param {{to: string, title:string, subject: string, html: {name: string} | {client: string, plain: string}}} email 
 * @param {{type: "REGISTER" | "MERCADOPAGO" | "REVIEW" }} querys 
 */
const sendMail = async (email, querys) => {

    const accessTransport = {
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'proyecto.complex.gym@gmail.com',
            clientId: ID_CLIENTE,
            clientSecret: SECRETO_CLIENTE,
            refreshToken: REFRESH_TOKEN
        },
    }

    const OAuth2Client = new OAuth2(
        ID_CLIENTE,
        SECRETO_CLIENTE,
        'https://developers.google.com/oauthplayground/'
    )

    OAuth2Client.setCredentials({
        refresh_token: REFRESH_TOKEN,
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

            let htmlMail = ''

            if(querys.type === 'REGISTER') htmlMail = templateRegister(email.html.name)
            else if (querys.type === 'MERCADOPAGO') htmlMail = templateNotificationMP(email.html.client, email.html.plain)
            else if (querys.type === 'REVIEW') htmlMail = templateReview(email.html.name)

            let info = await transporter.sendMail({
                from: `"${email.title}" <proyecto.complex.gym@gmail.com>`,
                to: email.to,
                subject: email.subject,
                html: htmlMail,
            });

            console.log("Message sent: %s", info.envelope.to);
        } catch (error) {
            console.log('un error en el envio : ', error.message)
        }
    })
}

module.exports = sendMail