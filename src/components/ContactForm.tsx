import { useState } from 'react';
import ReCaptcha from './ReCaptcha';

const ContactForm = () => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    try {
      // Here you would send the form data and recaptchaToken to your backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setRecaptchaToken(null);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        required
      />
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Message"
        required
      />
      
      <ReCaptcha onVerify={setRecaptchaToken} />
      
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm; 