/**
 * Formats an Indonesian phone number (e.g. 0831-6501-4750) into an international WhatsApp link URL.
 */
export function formatWhatsAppUrl(phone: string, defaultText: string = 'Halo Fadhila, saya melihat website portofolio Anda'): string {
  // Strip non-digit characters
  const cleanDigits = phone.replace(/\D/g, '');
  // Replace leading 0 with 62
  const intlPhone = cleanDigits.startsWith('0') ? '62' + cleanDigits.slice(1) : cleanDigits;
  const encodedText = encodeURIComponent(defaultText);
  return `https://wa.me/${intlPhone}?text=${encodedText}`;
}

/**
 * Formats an Instagram handle into a profile URL.
 */
export function formatInstagramUrl(handle: string): string {
  const cleanHandle = handle.replace(/^@/, '').trim();
  return `https://instagram.com/${cleanHandle}`;
}

/**
 * Validates the contact form inputs.
 */
export function validateContactForm(
  name: string,
  email: string,
  message: string
): { isValid: boolean; error?: string } {
  if (!name.trim()) {
    return { isValid: false, error: 'Mohon masukkan nama lengkap Anda.' };
  }
  if (!email.trim() || !email.includes('@') || !email.includes('.')) {
    return { isValid: false, error: 'Mohon masukkan alamat email yang valid.' };
  }
  if (!message.trim() || message.trim().length < 8) {
    return { isValid: false, error: 'Pesan Anda minimal berisi 8 karakter.' };
  }
  return { isValid: true };
}
