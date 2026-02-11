import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePreloader } from '@context/PreloaderContext';
import Preloader from '@components/layout/Preloader';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import MusicPlayer from '@components/widgets/MusicPlayer/MusicPlayer';
import Home from '@pages/Home';
import About from '@pages/About';
import Photographies from '@pages/Photographies';
import Project from '@pages/Project';
import NotFound from '@pages/NotFound';

function App() {
  const location = useLocation();
  const { isLoading } = usePreloader();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current && !isLoading) {
      gsap.fromTo(
        wrapperRef.current,
        { autoAlpha: 0 },
        { duration: 1, autoAlpha: 1, ease: 'power1.out' }
      );
    }
  }, [location.pathname, isLoading]);

  return (
    <>
      {isLoading && <Preloader />}
      <div ref={wrapperRef} className="wrapper" style={{ opacity: 0 }}>
        <Header />
        <main id="content" className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/photographies" element={<Photographies />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MusicPlayer />
      </div>
    </>
  );
}

export default App;
