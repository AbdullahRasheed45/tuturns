import nodemailer from "nodemailer";
import { hash } from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
  try {
    // create a hased token
    const hashedToken = await hash(userId.toString(), 10);

    const User = (await import("../models/userModel.js")).default;
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: "TuTurns",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          /* Inline styles for better email client support */
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            background-color: #ffffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin: 0 auto;
            max-width: 600px;
          }
          h2 {
            color: #007bff;
            font-size: 24px;
          }
          p {
            font-size: 16px;
            color: #333;
            margin: 10px 0;
          }
          a {
            text-decoration: none;
            color: #007bff;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Email Verification / Password Reset</h2>
      
          <p>
            You've received this email because you've requested to ${
              emailType === "VERIFY"
                ? "verify your email"
                : "reset your password"
            }:
          </p>
      
          <p>
            <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">
              Verify Your Account
            </a>
          </p>
      
          <p>
            If the above link doesn't work, you can copy and paste the link below into your web browser's address bar:
          </p>
      
          <p>
            <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">
              ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </a>
          </p>
        </div>
      
        <p style="font-size: 12px; color: #999; margin-top: 20px;">
          This email was sent to you by [Your Company Name]. If you did not request this email, please ignore it.
        </p>
      
      </body>
      </html>        `,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
