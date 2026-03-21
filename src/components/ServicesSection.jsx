import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const services = [
  {
    name: 'Signature Haircut',
    price: '$35',
    short: 'Precision cut, consultation, and style finish.',
    details:
      'Ideal for classic or contemporary looks. Includes hair analysis, clipper and scissor work, neckline cleanup, and finishing product styling.',
  },
  {
    name: 'Beard Trim & Sculpt',
    price: '$22',
    short: 'Shape, line-up, and conditioning for a polished beard.',
    details:
      'Includes beard contouring, razor edge detailing, moisture treatment, and product recommendations for daily maintenance.',
  },
  {
    name: 'Hot Towel Shave',
    price: '$30',
    short: 'Luxury traditional shave with hot towel treatment.',
    details:
      'A soothing service with pre-shave oil, rich lather, straight razor finish, hot towel therapy, and post-shave calming balm.',
  },
  {
    name: 'Hair Styling Session',
    price: '$28',
    short: 'Event-ready styling with product and finishing detail.',
    details:
      'Perfect before photoshoots, dates, or events. Includes wash, blowout, shape refinement, and personalized styling tips.',
  },
  {
    name: 'Father & Son Package',
    price: '$58',
    short: 'A premium duo service for shared grooming time.',
    details:
      'Enjoy two expertly tailored haircuts in one visit, with a coordinated booking slot and finishing style for both guests.',
  },
  {
    name: 'Full Grooming Experience',
    price: '$72',
    short: 'Haircut, beard service, hot towel, and finishing style.',
    details:
      'Our complete premium package for clients who want the full barbershop ritual and a camera-ready final look.',
  },
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="section-shell space-y-12">
        <SectionHeading
          eyebrow="Services"
          title="Tailored grooming services for every kind of confidence."
          description="From skin fades to beard sculpting, each service is designed for comfort, precision, and a polished final result."
        />

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="section-card gold-ring overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Premium Service</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{service.name}</h3>
                    </div>
                    <span className="rounded-full bg-gold-400 px-4 py-2 text-sm font-bold text-neutral-950">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{service.short}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium text-neutral-200">
                    <span>{isOpen ? 'Hide details' : 'View details'}</span>
                    <FiChevronDown
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-300' : ''}`}
                      size={20}
                    />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-6 pb-6 pt-4 text-sm leading-7 text-neutral-300">
                      {service.details}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
