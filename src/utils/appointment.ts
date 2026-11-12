export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  message?: string;
}

export type AppointmentValidationErrors = Partial<Record<keyof AppointmentFormData, string>>;

export interface ValidationResult {
  isValid: boolean;
  errors: AppointmentValidationErrors;
}

/**
 * Validates the appointment enquiry form.
 * Ensures:
 * - Name has at least 2 characters
 * - Phone contains valid 10-digit number (optionally with country code/leading 0)
 * - Service is selected
 * - Date is chosen and not in the past
 */
export function validateAppointmentForm(data: AppointmentFormData): ValidationResult {
  const errors: AppointmentValidationErrors = {};

  const trimmedName = (data.name || '').trim();
  if (!trimmedName) {
    errors.name = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  const rawPhone = (data.phone || '').trim();
  const digitsOnly = rawPhone.replace(/\D/g, '');

  if (!rawPhone) {
    errors.phone = 'Please enter your phone number.';
  } else {
    // Valid standard phone: 10 digits, or 11/12 with leading 0 or 91
    const isValidLength = digitsOnly.length >= 10 && digitsOnly.length <= 13;
    const isIndianFormat =
      digitsOnly.length === 10 ||
      (digitsOnly.length === 11 && digitsOnly.startsWith('0')) ||
      (digitsOnly.length === 12 && digitsOnly.startsWith('91'));

    if (!isValidLength || !isIndianFormat) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }
  }

  const trimmedService = (data.service || '').trim();
  if (!trimmedService) {
    errors.service = 'Please select a desired salon service.';
  }

  const rawDate = (data.date || '').trim();
  if (!rawDate) {
    errors.date = 'Please choose your preferred appointment date.';
  } else {
    // Check that selected date is not in the past (using date comparison in local time)
    const selected = new Date(rawDate + 'T00:00:00');
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selected.getTime())) {
      errors.date = 'Please enter a valid date.';
    } else if (selected < today) {
      errors.date = 'Appointment date cannot be in the past.';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Encodes the appointment details into an official WhatsApp click-to-chat URL.
 */
export function formatWhatsAppAppointmentUrl(
  data: AppointmentFormData,
  targetPhone: string = '919634556912'
): string {
  const cleanPhone = targetPhone.replace(/\D/g, '');
  const lines = [
    '✨ *HEAD ZONE SALON — APPOINTMENT ENQUIRY* ✨',
    '',
    `• *Customer Name:* ${data.name.trim()}`,
    `• *Contact Phone:* ${data.phone.trim()}`,
    `• *Desired Service:* ${data.service.trim()}`,
    `• *Preferred Date:* ${data.date.trim()}`,
  ];

  if (data.message && data.message.trim()) {
    lines.push(`• *Additional Notes:* ${data.message.trim()}`);
  }

  lines.push('');
  lines.push('Hello Head Zone team, please check availability for this appointment. Thank you!');

  const text = lines.join('\n');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Creates a WhatsApp enquiry URL for a specific service or general query.
 */
export function formatWhatsAppServiceEnquiryUrl(
  serviceName?: string,
  targetPhone: string = '919634556912'
): string {
  const cleanPhone = targetPhone.replace(/\D/g, '');
  let message = 'Hello Head Zone! I would like to enquire about your salon services and book an appointment.';
  if (serviceName) {
    message = `Hello Head Zone! I would like to enquire about your *${serviceName}* service and check appointment availability.`;
  }
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates general enquiry WhatsApp link.
 */
export function formatWhatsAppGeneralEnquiryUrl(
  customMessage?: string,
  targetPhone: string = '919634556912'
): string {
  const cleanPhone = targetPhone.replace(/\D/g, '');
  const message =
    customMessage ||
    'Hello Head Zone! I would like to enquire about your salon services and book an appointment.';
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

