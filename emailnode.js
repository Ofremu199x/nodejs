const { info } = require('console');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ofremu199x@gmail.com',
        pass: 'Onoriode1'
    }
});

var mailOptions = {
    from: 'ofremuendurance89@gmail.com',
    to: 'ofremu199x@gmail.com',
    subject: 'Sending email using node.js',
    text: 'That was easy',
    html: '<h1 style = color : blue> Welcome</h1><p> That was easy!</p>'
};


transporter.sendMail(mailOptions, function(error, infor){
    if (error) {
        console.log(error);
    } else {
        console.log('email sent:' + info.response);
    }
});