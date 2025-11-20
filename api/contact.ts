// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, message: "Method not allowed" });
    }

    const { firstName, lastName, email, message } = req.body || {};

    if (!email || !message) {
        return res.status(400).json({ ok: false, message: "Email and message required." });
    }

    const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Someone";

    try {
        await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL || "Contact Form <no-reply@example.com>",
            to: process.env.CONTACT_TO_EMAIL || "anabindiu11@gmail.com",
            subject: `New message from ${fullName}`,
            reply_to: email,
            text: `
                New contact form submission

                Name: ${fullName}
                Email: ${email}

                Message:
                ${message}
          `.trim(),
            });

        return res.status(200).json({ ok: true });
        } catch (error) {
            console.error("Contact form send error:", error);
            return res.status(500).json({ ok: false, message: "Failed to send message." });
        }
}
