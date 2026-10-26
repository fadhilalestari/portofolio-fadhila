import test from 'node:test';
import assert from 'node:assert/strict';
import { formatWhatsAppUrl, formatInstagramUrl, validateContactForm } from './helpers';

test('formatWhatsAppUrl properly normalizes 0831-6501-4750 to international 62 format', () => {
  const url = formatWhatsAppUrl('0831-6501-4750', 'Halo Fadhila');
  assert.ok(url.startsWith('https://wa.me/6283165014750'));
  assert.ok(url.includes('Halo%20Fadhila'));
});

test('formatInstagramUrl strips leading @ symbol', () => {
  assert.equal(formatInstagramUrl('@fadhilalestari_'), 'https://instagram.com/fadhilalestari_');
  assert.equal(formatInstagramUrl('fadhilalestari_'), 'https://instagram.com/fadhilalestari_');
});

test('validateContactForm checks empty name and invalid emails', () => {
  assert.equal(validateContactForm('', 'test@mail.com', 'Halo apa kabar').isValid, false);
  assert.equal(validateContactForm('Budi', 'invalid-mail', 'Halo apa kabar').isValid, false);
  assert.equal(validateContactForm('Budi', 'budi@mail.com', 'pendek').isValid, false);
  assert.equal(validateContactForm('Budi', 'budi@mail.com', 'Pesan yang cukup panjang').isValid, true);
});
