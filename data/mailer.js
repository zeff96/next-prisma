import nodemailer from "nodemailer";

const user = process.env.USER_MAIL;
const pass = process.env.USER_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
    method: "PLAIN",
  },
});

export const sendVerificationEmail = async (email, token) => {
  const emailLink = `http://localhost:3000/auth/email-verification?token=${token}`;

  try {
    await transporter.sendMail({
      from: user,
      to: email,
      subject: "Account email confirmation",
      html: `<p>Click <a href="${emailLink}">here</a> to confirm your account</p>`,
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendResetPassword = async (email, token) => {
  const emailLink = `http://localhost:3000/auth/edit_password?token=${token}`;

  try {
    await transporter.sendMail({
      from: user,
      to: email,
      subject: "Password reset link",
      html: `<p>Click <a href="${emailLink}">here</a> to reset your password</p>`,
    });
  } catch (error) {
    console.log(error);
  }
};
