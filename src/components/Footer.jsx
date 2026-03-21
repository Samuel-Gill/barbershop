import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const socials = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X' },
];

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-lg font-semibold text-white">Premium Barber Shop</p>
        <p className="mt-2 text-sm text-neutral-400">Crafted cuts, refined rituals, and confident style every day.</p>
      </div>

      <div className="flex items-center gap-3">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="rounded-full border border-white/10 p-3 text-neutral-300 transition hover:border-gold-300 hover:text-gold-300"
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>

      <p className="text-sm text-neutral-500">© 2026 Premium Barber Shop. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
