import Hero from '@components/sections/Hero';
import Frameworks from '@components/sections/Frameworks';
import Projects from '@components/sections/Projects';
import Services from '@components/sections/Services';
import AboutSection from '@components/sections/AboutSection';
import ContactForm from '@components/sections/ContactForm';

function Home() {
  return (
    <div className="home">
      <div className="home__wrapper">
        <Hero />
        <Frameworks />
        <Projects />
        <Services />
        <AboutSection />
        <ContactForm />
      </div>
    </div>
  );
}

export default Home;
