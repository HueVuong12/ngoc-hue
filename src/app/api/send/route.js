import { NextResponse } from "next/server";
import { Resend } from "resend";
console.log("RESEND_API_KEY =", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    console.log("Send email data:", { email, subject, message });

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject} - {email}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: error.message || "Unknown error" }, { status: 500 });
  }
}
