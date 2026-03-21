import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen bg-neutral-950 text-white">
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default App;
