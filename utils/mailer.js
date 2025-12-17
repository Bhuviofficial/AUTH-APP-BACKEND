import mailer from "nodemailer";

export const sendResetEmail = async (email, token) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Password Reset",
    html: `<p>Click <a href="${process.env.CLIENT_URL}/reset-password/${token}">here</a> to reset your password.</p>`
  };

  await transporter.sendMail(mailOptions);
};