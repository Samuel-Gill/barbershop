import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroSlides = [
  {
    image:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80',
    caption: 'Traditional precision, elevated experience.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sharp fades, signature beard care, luxury finishes.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crafted looks for the modern gentleman.',
  },
];

const stats = [
  { label: 'Master Barbers', value: '08+' },
  { label: 'Years of Craft', value: '15' },
  { label: '5-Star Reviews', value: '1.2k' },
];

const HeroSection = () => {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-hero-pattern pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-80 max-w-xl rounded-full bg-gold-400/10 blur-3xl" />
      <div className="section-shell grid items-center gap-10 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-gold-300">
            Refined cuts. Timeless confidence.
          </p>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Premium Barber Shop for Modern Gentlemen.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300 sm:text-xl">
            Experience expert fades, beard sculpting, hot towel rituals, and styling designed to keep you looking sharp all week.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={scrollToBooking}
              className="rounded-full bg-gold-400 px-7 py-3.5 text-base font-semibold text-neutral-950 transition hover:bg-gold-300"
            >
              Book Now
            </button>
            <a
              href="#services"
              className="rounded-full border border-white/15 px-7 py-3.5 text-base font-semibold text-white transition hover:border-gold-300 hover:text-gold-300"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="section-card gold-ring p-5">
                <p className="text-3xl font-bold text-gold-300">{stat.value}</p>
                <p className="mt-2 text-sm text-neutral-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="section-card gold-ring overflow-hidden shadow-glow"
        >
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="h-[420px] w-full sm:h-[520px]"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.image}>
                <div className="relative h-full">
                  <img src={slide.image} alt={slide.caption} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  <div className="absolute bottom-0 p-6 sm:p-8">
                    <span className="inline-flex rounded-full border border-gold-300/40 bg-neutral-950/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-gold-300">
                      Signature Experience
                    </span>
                    <p className="mt-4 max-w-md text-lg font-medium text-white sm:text-2xl">{slide.caption}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
