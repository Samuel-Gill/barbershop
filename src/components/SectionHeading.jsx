import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
  >
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-gold-300">{eyebrow}</p>
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
    <p className="mt-4 text-base leading-7 text-neutral-300 sm:text-lg">{description}</p>
  </motion.div>
);

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'center']),
};

export default SectionHeading;
