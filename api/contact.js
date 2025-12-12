
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, city, message } = req.body;

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['priyanshushikarwal@gmail.com'],
            subject: `New Contact Request from ${name}`,
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: 'Failed to send email' });
    }
}
