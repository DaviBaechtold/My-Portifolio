import { NextResponse } from "next/server"
export const runtime = "nodejs"
import nodemailer from "nodemailer"

type Body = {
  name?: string
  email?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as Body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const host = process.env.EMAIL_SERVER_HOST
    const user = process.env.EMAIL_SERVER_USER
    const pass = process.env.EMAIL_SERVER_PASSWORD
    const port = Number(process.env.EMAIL_SERVER_PORT || 465)
    const to = process.env.EMAIL_TO || "davicampos2002@gmail.com"
    const from = process.env.EMAIL_FROM || user || "no-reply@davicampos.dev"

    if (!host || !user || !pass) {
      return NextResponse.json({ error: "Email server not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587
      auth: { user, pass },
    })

    const subject = `📩 [Portfolio] New message from ${name}`
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height: 1.6;">
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr/>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `

    await transporter.sendMail({ from, to, subject, text, html, replyTo: email })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("/api/contact error", err)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
