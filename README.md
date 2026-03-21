# Premium Barber Shop

A modern, responsive single-page barber shop web application built with React, Vite, and Tailwind CSS. The UI includes smooth scrolling navigation, animated section reveals, Swiper carousels, an embedded free booking flow, gallery hover effects, and contact details with a Google Maps embed.

## Features

- Fixed responsive navbar with smooth-scroll section navigation
- Hero section with autoplay image carousel and call-to-action
- Expandable service cards with pricing and details
- Gallery carousel plus responsive image grid with hover zoom
- Frontend-only booking section using a free Calendly embed
- Simulated booking confirmation state
- Contact section with form, business details, and map embed
- Dark luxury barber theme with gold accents
- Framer Motion entrance animations

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Swiper.js
- React Icons
- Framer Motion

## Project Structure

```text
barbershop/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components/
        ├── BookingSection.jsx
        ├── ContactSection.jsx
        ├── Footer.jsx
        ├── GallerySection.jsx
        ├── HeroSection.jsx
        ├── Navbar.jsx
        ├── SectionHeading.jsx
        └── ServicesSection.jsx
```

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown by Vite, usually `http://localhost:5173`.

## Customize Booking

- Replace `https://calendly.com/calendly-demo/30min` in `src/components/BookingSection.jsx` with your own free Calendly booking URL.
- Alternatively, replace the iframe with a Google Appointment Schedule embed.

## Optional Notifications

- **EmailJS**: connect the guest-details form to EmailJS for free email confirmations.
- **SMS APIs**: integrate Twilio, Vonage, or MessageBird from a secure serverless function if you want text reminders.

## Deploy to Vercel

1. Push the project to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Click **Add New Project** and import the repository.
4. Vercel will detect Vite automatically.
5. Use these settings if prompted:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**.

## Deploy to Netlify

1. Push the project to GitHub.
2. Sign in to [Netlify](https://www.netlify.com/).
3. Click **Add new site** → **Import an existing project**.
4. Select your repository.
5. Use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**.

## Production Notes

- All images currently use Unsplash placeholders.
- Replace placeholder contact information and social links before publishing.
- If iframe providers block previews in a specific environment, test the deployed site in a browser.
