const nodemailer = require("nodemailer");

async function sendNotification(req, res) {

  // let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "forme.deliver@gmail.com",
      pass: "Luapasivad!!212"
    }

  });

  let email = await transporter.sendMail({
    from: "Form[e] Notification <forme.deliver@gmail.com>",
    to: "luapasivad@gmail.com",
    subject: "test",
    text: "Hello world!"
  }, (err, data) => {
    if (err) console.log(err)
    else console.log(data)
  });
}

sendNotification()



