import { NextResponse } from "next/server"
import { Resend } from "resend"

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

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "davicampos2002@gmail.com",
      replyTo: email,
      subject: `📩 [Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height: 1.6;">
          <h2>New contact message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr/>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error("/api/contact resend error", error)
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("/api/contact error", err)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
