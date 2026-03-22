import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const contactDetails = [
  { icon: FiPhoneCall, label: 'Phone', value: '(484) 687-8167' },
  { icon: FiMail, label: 'Email', value: 'hello@premiumbarbershop.com' },
  { icon: FiMapPin, label: 'Address', value: '35 Bridge St, Phoenixville, PA 19460' },
];

const ContactSection = () => {

  return (
    <section id="contact" className="bg-white/[0.02] py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Visit the shop, ask a question, or plan your next appointment."
          description="Reach out through the contact form, call the shop directly, or stop by our downtown location."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="section-card gold-ring p-6"
          >
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
                      <p className="mt-1 text-base text-neutral-200">
                        {item.label === 'Phone' && (
                          <a href={`tel:${item.value.replace(/[^0-9]/g, '')}`} className="hover:text-gold-300">
                            {item.value}
                          </a>
                        )}

                        {item.label === 'Email' && (
                          <a href={`mailto:${item.value}`} className="hover:text-gold-300">
                            {item.value}
                          </a>
                        )}

                        {item.label === 'Address' && (
                          <a
                            href="https://www.google.com/maps?q=35+Bridge+St,+Phoenixville,+PA+19460"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gold-300"
                          >
                            {item.value}
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-card overflow-hidden"
          >
            <iframe
              title="Google Maps location"
              src="https://www.google.com/maps?q=35+Bridge+St,+Phoenixville,+PA+19460&z=14&output=embed"
              className="h-[400px] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
