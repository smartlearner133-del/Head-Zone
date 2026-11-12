import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateAppointmentForm,
  formatWhatsAppAppointmentUrl,
  formatWhatsAppServiceEnquiryUrl,
} from './appointment';

test('validateAppointmentForm rejects empty fields', () => {
  const result = validateAppointmentForm({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.service);
  assert.ok(result.errors.date);
});

test('validateAppointmentForm rejects invalid phone numbers', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const resultShort = validateAppointmentForm({
    name: 'Rajesh Kumar',
    phone: '12345',
    service: 'Haircut & Styling',
    date: tomorrowStr,
  });
  assert.equal(resultShort.isValid, false);
  assert.ok(resultShort.errors.phone);

  const resultAlpha = validateAppointmentForm({
    name: 'Rajesh Kumar',
    phone: 'abcdefghij',
    service: 'Haircut & Styling',
    date: tomorrowStr,
  });
  assert.equal(resultAlpha.isValid, false);
  assert.ok(resultAlpha.errors.phone);
});

test('validateAppointmentForm accepts valid 10-digit mobile number with or without prefix', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const result1 = validateAppointmentForm({
    name: 'Rajesh Kumar',
    phone: '9634556912',
    service: 'Haircut & Styling',
    date: tomorrowStr,
  });
  assert.equal(result1.isValid, true);
  assert.equal(Object.keys(result1.errors).length, 0);

  const result2 = validateAppointmentForm({
    name: 'Amit Sharma',
    phone: '+91 96345 56912',
    service: 'Beard Styling & Grooming',
    date: tomorrowStr,
  });
  assert.equal(result2.isValid, true);
});

test('validateAppointmentForm rejects dates in the past', () => {
  const pastDate = '2020-01-01';
  const result = validateAppointmentForm({
    name: 'Rajesh Kumar',
    phone: '9634556912',
    service: 'Haircut & Styling',
    date: pastDate,
  });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.date, 'Appointment date cannot be in the past.');
});

test('formatWhatsAppAppointmentUrl builds correct URI with all details', () => {
  const url = formatWhatsAppAppointmentUrl(
    {
      name: 'Vikram Singh',
      phone: '9634556912',
      service: 'Hair Spa & Treatments',
      date: '2026-11-20',
      message: 'Looking for a relaxing session',
    },
    '919634556912'
  );

  assert.ok(url.startsWith('https://wa.me/919634556912?text='));
  const decoded = decodeURIComponent(url);
  assert.ok(decoded.includes('Vikram Singh'));
  assert.ok(decoded.includes('9634556912'));
  assert.ok(decoded.includes('Hair Spa & Treatments'));
  assert.ok(decoded.includes('2026-11-20'));
  assert.ok(decoded.includes('Looking for a relaxing session'));
});

test('formatWhatsAppServiceEnquiryUrl encodes custom service name', () => {
  const generalUrl = formatWhatsAppServiceEnquiryUrl();
  assert.ok(generalUrl.includes('919634556912'));
  assert.ok(decodeURIComponent(generalUrl).includes('enquire about your salon services'));

  const serviceUrl = formatWhatsAppServiceEnquiryUrl('Hair Coloring');
  assert.ok(decodeURIComponent(serviceUrl).includes('Hair Coloring'));
});
