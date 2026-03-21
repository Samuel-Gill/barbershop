import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionHeading from './SectionHeading';

const galleryImages = [
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512690459411-b0fd1c86b8ce?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1599351431405-2f48520d3f93?auto=format&fit=crop&w=900&q=80',
];

const GallerySection = () => (
  <section id="gallery" className="bg-white/[0.02] py-20 sm:py-24">
    <div className="section-shell space-y-12">
      <SectionHeading
        eyebrow="Gallery"
        title="A look at clean lines, premium ambiance, and sharp finishes."
        description="Browse our latest cuts and the polished space where every appointment feels elevated."
        align="center"
      />

      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 2400, disableOnInteraction: false }}
        spaceBetween={16}
        breakpoints={{
          0: { slidesPerView: 1.15 },
          640: { slidesPerView: 2.1 },
          1024: { slidesPerView: 3.15 },
        }}
        className="pb-2"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={image}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[28px] border border-white/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={image}
                  alt={`Barber shop gallery ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 to-transparent opacity-80 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-300">Look {index + 1}</p>
                  <p className="mt-2 text-lg font-semibold text-white">Refined barbering, built for everyday style.</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.slice(0, 3).map((image, index) => (
          <div key={`${image}-grid`} className="group overflow-hidden rounded-[28px] border border-white/10">
            <div className="relative aspect-[1.15/1] overflow-hidden">
              <img
                src={image}
                alt={`Detailed style preview ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/25 opacity-0 transition group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
