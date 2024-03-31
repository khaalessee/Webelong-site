export async function sendEmail(data: Record<string, any>): Promise<{ message: string }> {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.status === 204) {
      return { message: 'Email sent successfully!' };
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
}
