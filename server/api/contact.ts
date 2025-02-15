const RECAPTCHA_SECRET_KEY = "6LcJtjEqAAAAAExZqvS8W59-uUlQHKv4-WODRo3z";

async function verifyRecaptcha(token: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();
  return data.success;
}

// Example API endpoint
app.post('/api/contact', async (req, res) => {
  const { email, recaptchaToken } = req.body;

  try {
    const isValid = await verifyRecaptcha(recaptchaToken);
    
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid reCAPTCHA' });
    }

    // Process the email subscription
    // ... your subscription logic here ...

    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
}); 