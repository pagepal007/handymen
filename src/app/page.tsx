// app/page.tsx
import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";

// Lazy-load below-the-fold sections with placeholders
const ServicesSection = dynamic(
  () => import("./components/ServicesSection"),
  { loading: () => <p>Loading Services...</p> }
);

const AboutSection = dynamic(
  () => import("./components/AboutSection"),
  { loading: () => <p>Loading About...</p> }
);

const GallerySection = dynamic(
  () => import("./components/GallerySection"),
  { loading: () => <p>Loading Gallery...</p> } // client-only if using browser APIs
);

const TestimonialsSection = dynamic(
  () => import("./components/TestimonialsSection"),
  { loading: () => <p>Loading Testimonials...</p> }
);

const ContactSection = dynamic(
  () => import("./components/ContactSection"),
  { loading: () => <p>Loading Contact Form...</p> }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>  General Rooter XP-LLC</title>
        <meta name="google-site-verification" content="DV1SQZtTHArP3mi0o3LwM7VLayTrm_Xkm9S5am7HpgY" />
        <meta
          name="description"
          content=" General Rooter XP-LLC offers professional handyman services including plumbing, painting, repairs, and more. Trusted for quality work."
        />
        <meta
          name="keywords"
          content="handyman, plumbing, painting, home repairs, handyman services, professional handyman"
        />
        <meta name="author" content=" General Rooter XP-LLC" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://generalrooterxp.netlify.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="  General Rooter XP-LLC" />
        <meta property="og:description" content="Professional handyman services for every home project." />
        <meta property="og:image" content="https://generalrooterxp.netlify.app//hero-image.jpg" />
        <meta property="og:url" content="https://generalrooterxp.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "General Rooter XP-LLC",
              "url": "https://generalrooterxp.netlify.app/",
              "logo": "https://generalrooterxp.netlify.app//logo.png",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage"
              ],
              "priceRange": "$200-$300",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main St",
                "addressLocality": "Maplewood",
                "addressRegion": "New Jersey",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "telephone": "860-994-9097",
              "image": "https://generalrooterxp.netlify.app//hero-image.jpg"
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
