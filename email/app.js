var nodemailer = require('nodemailer');
  
var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adnank.neosoft@gmail.com',
    pass: 'Vinaygautam26#'
  }
});
  
var mailOptions = {
   from: 'adnank.neosoft@gmail.com',
   to: 'gautamvinay26@outlook.com',
   subject: 'Sending Email using Node.js',
   html: '<h1>hello</h1>'
}
// That was easy!
// ' ,
//    attachments: [{
//        filename: 'text1.txt',
//        content: 'hello world!'
//    }
// }
  
mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
});