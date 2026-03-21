import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between py-4">
          <button
            type="button"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/50 bg-gold-400/10 text-lg font-black text-gold-300">
              PB
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold-300">Premium</p>
              <p className="text-lg font-semibold text-white">Barber Shop</p>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-neutral-200 transition hover:text-gold-300"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick('#booking')}
              className="rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-gold-300"
            >
              Book Now
            </button>
          </nav>

          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        {open && (
          <div className="mb-4 rounded-3xl border border-white/10 bg-neutral-900/95 p-4 shadow-glow md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-neutral-200 transition hover:bg-white/5 hover:text-gold-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
