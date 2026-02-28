import { Resend } from 'resend';

// Initialize Resend with the API Key you'll set in Vercel's dashboard
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 1. Security: Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, message } = req.body;

    // 2. Basic Validation
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // 3. Send the email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update this after domain verification
      to: ['dammyprogrammer@gmail.com'], // The email YOU want to receive messages at
      reply_to: email, // This allows you to reply directly to the sender
      subject: `New Message from ${firstName} ${lastName}|${email}`,
      text: `You have a new message:\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return res.status(400).json({ error });
    }

    // 4. Success Response
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });

  } catch (err) {
    console.error("Server Error:", err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}