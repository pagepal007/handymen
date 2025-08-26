// app/page.tsx
import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";

// Lazy-load below-the-fold sections with placeholders
const ServicesSection = dynamic(() => import("./components/ServicesSection"), {
  loading: () => <p>Loading Services...</p>,
});

const AboutSection = dynamic(() => import("./components/AboutSection"), {
  loading: () => <p>Loading About...</p>,
});

const GallerySection = dynamic(
  () => import("./components/GallerySection"),
  { loading: () => <p>Loading Gallery...</p> } // client-only if using browser APIs
);

const TestimonialsSection = dynamic(
  () => import("./components/TestimonialsSection"),
  { loading: () => <p>Loading Testimonials...</p> }
);

const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => <p>Loading Contact Form...</p>,
});

export default function Home() {
  return (
    <>
      <Head>
        {/* SEO Meta Tags */}
        <title>
          Plumber & Handyman Services in Maplewood NJ | General Rooter XP-LLC
        </title>
        <meta
          name="description"
          content="Looking for a plumber in Maplewood, NJ? General Rooter XP-LLC provides expert plumbing, handyman, and home repair services. Call 860-994-9097 today!"
        />
        <meta
          name="keywords"
          content="plumber Maplewood NJ, plumbing services Maplewood, emergency plumber Maplewood, handyman Maplewood, plumbing repair, drain cleaning"
        />
        <meta name="author" content="General Rooter XP-LLC" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://generalrooterxp.netlify.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="DV1SQZtTHArP3mi0o3LwM7VLayTrm_Xkm9S5am7HpgY"
        />

        {/* Open Graph for social sharing */}
        <meta
          property="og:title"
          content="Plumber in Maplewood NJ | General Rooter XP-LLC"
        />
        <meta
          property="og:description"
          content="Professional plumbing & handyman services in Maplewood, NJ. Call 860-994-9097 for fast, reliable service."
        />
        <meta
          property="og:image"
          content="https://generalrooterxp.netlify.app/hero-image.jpg"
        />
        <meta
          property="og:url"
          content="https://generalrooterxp.netlify.app/"
        />
        <meta property="og:type" content="website" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "General Rooter XP-LLC",
              url: "https://generalrooterxp.netlify.app/",
              logo: "https://generalrooterxp.netlify.app/logo.png",
              image: "https://generalrooterxp.netlify.app/hero-image.jpg",
              telephone: "860-994-9097",
              priceRange: "$200-$300",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main St",
                addressLocality: "Maplewood",
                addressRegion: "New Jersey",
                postalCode: "12345",
                addressCountry: "US",
              },
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage",
              ],
              serviceType: [
                "Plumbing",
                "Drain Cleaning",
                "Handyman Repairs",
                "Painting",
              ],
              areaServed: {
                "@type": "Place",
                name: "Maplewood, New Jersey",
              },
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
