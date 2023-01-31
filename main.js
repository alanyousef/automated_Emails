require('dotenv').config
const nodemailer = require("nodemailer");

(async function run(){
console.log('running my daily report')

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER_EMAIL, // generated ethereal user
      pass: process.env.MAIL_USER_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
   await transporter.sendMail({
    from: 'Automotion Reports <automotionreports@gmail.com>', // sender address
    to: "alany@adgorg.com", // list of receivers
    subject: "Daily Report", // Subject line
    text: `Daily Report`, // plain text body
    html: `<h1>Daily Report</h1>`, // html body
  });

})();