import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const bookingHighlights = [
  'Real-time scheduling can be embedded for a free Calendly or Google Calendar booking page.',
  'Clients can choose a preferred date and time directly inside the iframe below.',
  'This frontend form captures client details and simulates a successful confirmation state.',
];

const BookingSection = () => {

  return (
    <section id="booking" className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Booking"
          title="Reserve your chair with a free, frontend-only booking flow."
          description="Use the embedded scheduling widget to browse time slots, then share your details below for a polished confirmation experience."
        />

        <div className="grid gap-8 max-w-5xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
