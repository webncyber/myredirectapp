import { error } from "console";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer'

export async function POST(req: Request) {
  try {
    const {fullname, subject, message, email, emailService } = await req.json();

    
    console.log("emailService: ", emailService)
    if (emailService === "gmail") {
      const transporter = nodemailer.createTransport({
        service: emailService,
        host: process.env.NEXT_PUBLIC_SEND_EMAIL_SMTP_G,
        port: 587,
        secure: true,
        auth: {
          user: process.env.NEXT_PUBLIC_SEND_EMAIL_USR_G,
          pass: process.env.NEXT_PUBLIC_SEND_EMAIL_PWD_G,
        },
      });
      

      const mailOption: Mail.Options  = {
        from: process.env.NEXT_PUBLIC_SEND_EMAIL_USR_G,
        to: process.env.NEXT_PUBLIC_SEND_EMAIL_TO_G,
        subject: subject,
        html: message,
        // text: message,
      };

      await transporter.sendMail(mailOption);

      return NextResponse.json(
        { message: "Email Sent Successfully" },
        { status: 200 }
      );
    }

    // Send with aws
    if (emailService === "aws") {
      // Create Email Transporter
      const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_SEND_EMAIL_SMTP_A,
        port: 2587,
        secure: false,
        auth: {
          user: process.env.NEXT_PUBLIC_SEND_EMAIL_USR_A,
          pass: process.env.NEXT_PUBLIC_SEND_EMAIL_PWD_A,
        },
      });

      const mailOption = {
        from: process.env.NEXT_PUBLIC_SEND_EMAIL_TO_A,
        to: process.env.NEXT_PUBLIC_SEND_EMAIL_TO_A,
        subject: subject,
        html: message,
      };

      await transporter.sendMail(mailOption);

      return NextResponse.json(
        { message: "Email Sent Successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log("ERR: ", error)
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}