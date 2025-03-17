const nodemailer = require('nodemailer');


var otpgenerator=()=>{

    let digit=6;
    var otp="";
    for( i=0;i<digit;i++){
        let numbr=Math.floor(Math.random()*10);
        otp=otp+numbr;
    }
    return otp;
}



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.user,
    pass: process.env.pass
  }
});

var otpstore;
var sendOtp=(userEmail)=>{
  
  otpstore[userEmail]=otpgenerator();

  var mailOptions = {
    from: process.env.user,
    to: userEmail,
    subject: 'tinder otp ',
     text: 'otp for varification process is '+ otpstore[userEmail]
  };
  

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});}


var verifyOtp=(userEmail,otp)=>{

  if(!otpstore[userEmail]==otp){

    throw error("otp was incorrect");
  }

  
}


module.exports={
  sendOtp:sendOtp,
  verifyOtp:verifyOtp
}