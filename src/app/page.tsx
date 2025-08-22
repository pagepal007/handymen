// app/page.tsx
import Head from "next/head";
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Handyman Pro - Trusted Handyman Services</title>
        <meta
          name="description"
          content="Handyman Pro offers professional handyman services including plumbing, painting, repairs, and more. Trusted for quality work."
        />
        <meta
          name="keywords"
          content="handyman, plumbing, painting, home repairs, handyman services, professional handyman"
        />
        <meta name="author" content="Handyman Pro" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Handyman Pro - Trusted Handyman Services" />
        <meta property="og:description" content="Professional handyman services for every home project." />
        <meta property="og:image" content="https://yourwebsite.com/hero-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Handyman Pro",
              "url": "https://yourwebsite.com",
              "logo": "https://yourwebsite.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage"
              ],
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main St",
                "addressLocality": "YourCity",
                "addressRegion": "YourState",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "telephone": "+1234567890",
              "image": "https://yourwebsite.com/hero-image.jpg"
            }),
          }}
        />
      </Head>

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="services">
       
          <ServicesSection />
        </section>

        <section id="about">
         
          <AboutSection />
        </section>

        <section id="gallery">
   
          <GallerySection />
        </section>

        <section id="testimonials">
      
          <TestimonialsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
