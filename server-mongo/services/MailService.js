import nodemailer from 'nodemailer';

const EMAIL = process.env.EMAIL || 'bloodyave@gmail.com';
const PASSWORD = process.env.PASSWORD || 'sxcx jczy dkxt ueta';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

class MailService {
  sendRegistrationSuccess(emailTo) {
    const mailOptions = {
      from: EMAIL,
      to: emailTo,
      subject: 'Registration is successfully!',
      text: 'You can login',
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        throw error;
      }
      console.log(`Email sent: ${info.response}`);
    });
  }
}

export default new MailService();
