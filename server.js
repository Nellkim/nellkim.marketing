import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// API: Contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, company, message, recaptchaToken } = req.body || {};

  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Verify reCAPTCHA
  try {
    const recaptchaRes = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res.status(403).json({ error: 'reCAPTCHA verification failed' });
    }
  } catch (err) {
    console.error('reCAPTCHA error:', err);
    return res.status(500).json({ error: 'reCAPTCHA verification error' });
  }

  // Send email via Resend
  const resend = new Resend(process.env.RESEND_API_KEY);
  const contactEmail = process.env.CONTACT_EMAIL || 'james.sampson@squaresix.com';

  try {
    await resend.emails.send({
      from: 'Nellkim Website <noreply@nellkim.com>',
      to: [contactEmail],
      replyTo: email,
      subject: `New Client Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

// SPA fallback — serve index.html for all other routes
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Nellkim server running on port ${PORT}`);
});

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
