import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Calendar, User, Phone, Sparkles, MessageSquare } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import {
  AppointmentFormData,
  AppointmentValidationErrors,
  validateAppointmentForm,
  formatWhatsAppAppointmentUrl,
} from '../utils/appointment';

interface AppointmentFormProps {
  initialService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialService }) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    service: initialService || SALON_DATA.services[0].title,
    date: minDateStr,
    message: '',
  });

  const [errors, setErrors] = useState<AppointmentValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear field-specific error as user types
    if (errors[name as keyof AppointmentFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateAppointmentForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const waUrl = formatWhatsAppAppointmentUrl(formData, SALON_DATA.whatsappNumber);
    setSubmittedWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in a new tab / mobile app
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedWhatsAppUrl('');
    setFormData({
      name: '',
      phone: '',
      service: SALON_DATA.services[0].title,
      date: minDateStr,
      message: '',
    });
  };

  return (
    <div
      id="appointment-form"
      className="p-8 sm:p-10 rounded-sm bg-[#151515] border border-[#242424] shadow-2xl relative"
    >
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-[#D6B36A]" />
        <span className="text-xs uppercase tracking-widest text-[#D6B36A] font-semibold">
          Online Reservation
        </span>
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2ED] mb-3">
        Book Your Salon Visit
      </h3>
      <p className="text-xs sm:text-sm text-[#A7A29B] mb-8">
        Submit your appointment details below. We instantly prepare your request on WhatsApp so our stylists can confirm your reserved slot without delay.
      </p>

      {isSubmitted ? (
        <div className="py-8 px-6 bg-[#191919] border border-[#D6B36A]/50 rounded-sm text-center">
          <div className="w-12 h-12 rounded-full bg-[#111111] border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <h4 className="font-serif text-xl font-bold text-[#F5F2ED] mb-2">
            Enquiry Prepared for WhatsApp
          </h4>
          <p className="text-sm text-[#A7A29B] max-w-md mx-auto mb-6">
            We opened WhatsApp with your booking details for <strong className="text-[#D6B36A]">{formData.name}</strong> on <strong className="text-[#D6B36A]">{formData.date}</strong> for <strong className="text-[#D6B36A]">{formData.service}</strong>. If your WhatsApp window didn&apos;t open automatically, click the button below.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={submittedWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open in WhatsApp</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3 bg-[#111111] hover:bg-[#242424] text-[#A7A29B] hover:text-[#F5F2ED] border border-[#242424] text-xs uppercase tracking-wider rounded-sm transition-all"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="customer-name" className="block text-xs uppercase tracking-wider text-[#A7A29B] font-medium mb-1.5">
              Customer Name <span className="text-[#D6B36A]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#73706B]">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                id="customer-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Vikram Sharma"
                className={`w-full pl-10 pr-4 py-3 bg-[#111111] border rounded-sm text-sm text-[#F5F2ED] placeholder-[#555555] transition-colors focus-visible:outline-none focus-visible:ring-1 ${
                  errors.name
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : 'border-[#242424] focus-visible:border-[#D6B36A] focus-visible:ring-[#D6B36A]'
                }`}
                required
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="customer-phone" className="block text-xs uppercase tracking-wider text-[#A7A29B] font-medium mb-1.5">
              Mobile Number <span className="text-[#D6B36A]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#73706B]">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                id="customer-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number (e.g. 9634556912)"
                className={`w-full pl-10 pr-4 py-3 bg-[#111111] border rounded-sm text-sm text-[#F5F2ED] placeholder-[#555555] transition-colors focus-visible:outline-none focus-visible:ring-1 ${
                  errors.phone
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : 'border-[#242424] focus-visible:border-[#D6B36A] focus-visible:ring-[#D6B36A]'
                }`}
                required
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Desired Service Field */}
          <div>
            <label htmlFor="desired-service" className="block text-xs uppercase tracking-wider text-[#A7A29B] font-medium mb-1.5">
              Desired Service <span className="text-[#D6B36A]">*</span>
            </label>
            <select
              id="desired-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#111111] border rounded-sm text-sm text-[#F5F2ED] transition-colors focus-visible:outline-none focus-visible:ring-1 ${
                errors.service
                  ? 'border-red-500 focus-visible:ring-red-500'
                  : 'border-[#242424] focus-visible:border-[#D6B36A] focus-visible:ring-[#D6B36A]'
              }`}
              required
            >
              {SALON_DATA.services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.category})
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.service}</span>
              </p>
            )}
          </div>

          {/* Date Picker */}
          <div>
            <label htmlFor="appointment-date" className="block text-xs uppercase tracking-wider text-[#A7A29B] font-medium mb-1.5">
              Preferred Appointment Date <span className="text-[#D6B36A]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#73706B]">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="date"
                id="appointment-date"
                name="date"
                min={minDateStr}
                value={formData.date}
                onChange={handleChange}
                className={`w-full pl-10 pr-4 py-3 bg-[#111111] border rounded-sm text-sm text-[#F5F2ED] transition-colors focus-visible:outline-none focus-visible:ring-1 ${
                  errors.date
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : 'border-[#242424] focus-visible:border-[#D6B36A] focus-visible:ring-[#D6B36A]'
                }`}
                required
              />
            </div>
            {errors.date && (
              <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.date}</span>
              </p>
            )}
          </div>

          {/* Message field */}
          <div>
            <label htmlFor="additional-message" className="block text-xs uppercase tracking-wider text-[#A7A29B] font-medium mb-1.5">
              Additional Message / Style Notes (Optional)
            </label>
            <textarea
              id="additional-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your style preference, timing preference, or questions..."
              className="w-full px-4 py-3 bg-[#111111] border border-[#242424] focus-visible:border-[#D6B36A] focus-visible:ring-1 focus-visible:ring-[#D6B36A] rounded-sm text-sm text-[#F5F2ED] placeholder-[#555555] transition-colors focus-visible:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#D6B36A] to-[#B9975B] text-[#111111] hover:brightness-110 active:scale-98 transition-all font-bold text-xs sm:text-sm tracking-widest uppercase rounded-sm shadow-xl shadow-[#D6B36A]/10 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B36A]"
          >
            <Send className="w-4 h-4" />
            <span>Submit &amp; Connect on WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-[#73706B] tracking-wide">
            Instant booking confirmation via WhatsApp. No hidden charges or registration required.
          </p>
        </form>
      )}
    </div>
  );
};
