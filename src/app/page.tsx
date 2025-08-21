// app/page.tsx (or pages/index.tsx if not using /app)
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection'; // optional, if you have it
import ServicesSection from './components/ServicesSection'; // optional, if you have it
import styles from './page.module.css';

export default function Home() {
  return (
    <div >
      <HeroSection />

      <ServicesSection />
      <AboutSection />

    <GallerySection />

      <TestimonialsSection />

       <ContactSection />
    </div>
  );
}
