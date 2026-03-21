import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const contactDetails = [
  { icon: FiPhoneCall, label: 'Phone', value: '(555) 123-4567' },
  { icon: FiMail, label: 'Email', value: 'hello@premiumbarbershop.com' },
  { icon: FiMapPin, label: 'Address', value: '125 Gold Street, New York, NY 10001' },
];

const initialMessage = {
  name: '',
  email: '',
  message: '',
};

const ContactSection = () => {
  const [messageForm, setMessageForm] = useState(initialMessage);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessageForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setMessageForm(initialMessage);
  };

  return (
    <section id="contact" className="bg-white/[0.02] py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Visit the shop, ask a question, or plan your next appointment."
          description="Reach out through the contact form, call the shop directly, or stop by our downtown location."
        />

        <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="section-card gold-ring p-6">
              <h3 className="text-2xl font-semibold text-white">Get in touch</h3>
              <div className="mt-6 space-y-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                      <div className="rounded-full bg-gold-400/10 p-3 text-gold-300">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-gold-300">{item.label}</p>
                        <p className="mt-1 text-base text-neutral-200">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="section-card overflow-hidden">
              <iframe
                title="Google Maps location"
                src="https://www.google.com/maps?q=Madison+Square+Park,+New+York,+NY&z=14&output=embed"
                className="h-[320px] w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-card gold-ring p-6 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-white">Send a message</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              Need help choosing a service or planning a group booking? Send us a note and we&apos;ll get back to you.
            </p>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-200">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    value={messageForm.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-gold-300"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-neutral-200">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={messageForm.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-gold-300"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-neutral-200">Message</span>
                <textarea
                  required
                  rows="6"
                  name="message"
                  value={messageForm.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-gold-300"
                  placeholder="Tell us how we can help"
                />
              </label>
              <button
                type="submit"
                className="justify-self-start rounded-full bg-gold-400 px-6 py-3.5 text-base font-semibold text-neutral-950 transition hover:bg-gold-300"
              >
                Send Message
              </button>
            </form>

            {sent && (
              <div className="mt-5 rounded-2xl border border-gold-300/20 bg-gold-400/10 p-4 text-sm text-gold-100">
                Thanks for reaching out. Your message has been captured in this frontend demo.
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
