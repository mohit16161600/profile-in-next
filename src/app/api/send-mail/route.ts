import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: Number(process.env.EMAIL_PORT || 465),
      secure: process.env.EMAIL_SECURE !== "false",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${name} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "(not provided)"}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || "(not provided)"}</p><p><strong>Message:</strong><br />${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("send-mail error", error);
    return NextResponse.json({ message: "Email send failed" }, { status: 500 });
  }
}
