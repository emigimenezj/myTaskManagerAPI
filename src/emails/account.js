// There are some problems sending mails with SendGrid on zohomail and hotmail services.
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'emi.m94@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'emi.m94@hotmail.com',
        subject: 'Sorry to see you go!',
        text: `Good bye, ${name}!\nI hope to see you back sometime soon.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}