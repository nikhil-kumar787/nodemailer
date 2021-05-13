const express = require('express')
const app = express()
const port = 3000

const env = require('dotenv')
const nodemailer = require('nodemailer')

env.config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
    //   clientId: process.env.OAUTH_CLIENTID,
    //   clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
  });

  let mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: process.env.SENDER_EMAIL,
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

  app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
  })