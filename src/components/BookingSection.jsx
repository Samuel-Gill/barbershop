import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiMail, FiMessageSquare } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const bookingHighlights = [
  'Real-time scheduling can be embedded for a free Calendly or Google Calendar booking page.',
  'Clients can choose a preferred date and time directly inside the iframe below.',
  'This frontend form captures client details and simulates a successful confirmation state.',
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
};

const BookingSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section id="booking" className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Booking"
          title="Reserve your chair with a free, frontend-only booking flow."
          description="Use the embedded scheduling widget to browse time slots, then share your details below for a polished confirmation experience."
        />

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="section-card gold-ring overflow-hidden p-3 sm:p-4"
          >
            <div className="mb-4 grid gap-3 rounded-[24px] bg-white/5 p-4 sm:grid-cols-3">
              {bookingHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-neutral-950/40 p-4 text-sm leading-6 text-neutral-300">
                  {item}
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-neutral-950/70">
              <iframe
                title="Calendly Booking"
                src="https://calendly.com/samuelgill1996/haircut-appointment"
                className="h-[760px] w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="section-card gold-ring p-6">
              <h3 className="text-2xl font-semibold text-white">Guest details</h3>
              <p className="mt-2 text-sm leading-7 text-neutral-300">
                Complete this form after choosing a slot. On a real deployment, you could send these details to EmailJS for free email notifications or connect an SMS API like Twilio for text reminders.
              </p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                {['name', 'email', 'phone'].map((field) => (
                  <label key={field} className="block">
                    <span className="mb-2 block text-sm font-medium capitalize text-neutral-200">{field}</span>
                    <input
                      required
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={
                        field === 'name'
                          ? 'Jordan Blake'
                          : field === 'email'
                            ? 'jordan@email.com'
                            : '(555) 234-9876'
                      }
                      className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-gold-300"
                    />
                  </label>
                ))}
                <button
                  type="submit"
                  className="w-full rounded-full bg-gold-400 px-6 py-3.5 text-base font-semibold text-neutral-950 transition hover:bg-gold-300"
                >
                  Confirm Booking Request
                </button>
              </form>

              {submitted && (
                <div className="mt-5 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  <div className="flex items-start gap-3">
                    <FiCheckCircle className="mt-0.5" size={18} />
                    <p>
                      Your appointment request was submitted successfully. You can wire this state to EmailJS for email confirmations, and to services like Twilio or Vonage for SMS reminders.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="section-card p-6">
              <h4 className="text-lg font-semibold text-white">Integration ideas</h4>
              <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-300">
                <div className="flex gap-3">
                  <FiMail className="mt-1 text-gold-300" />
                  <p>
                    <strong className="text-white">EmailJS:</strong> create a free EmailJS service, add your public key, service ID, and template ID, then submit the guest form with <code className="text-gold-300">emailjs.send()</code>.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FiMessageSquare className="mt-1 text-gold-300" />
                  <p>
                    <strong className="text-white">SMS:</strong> send booking reminders through Twilio, MessageBird, or Vonage by posting booking details from a secure serverless function.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FiClock className="mt-1 text-gold-300" />
                  <p>
                    <strong className="text-white">Availability:</strong> replace the demo Calendly URL with your own free schedule or a Google Appointment Schedule embed to expose real time slots.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
