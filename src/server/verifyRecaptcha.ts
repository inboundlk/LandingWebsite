async function verifyRecaptcha(token: string) {
  const secretKey = "6LcJtjEqAAAAAExZqvS8W59-uUlQHKv4-WODRo3z";
  
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();
  return data.success;
} 