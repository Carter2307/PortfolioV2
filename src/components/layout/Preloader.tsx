import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { usePreloader } from '@context/PreloaderContext';

const preloaderWords = ['Explore', 'Design', 'Code', 'Test', 'Deploy'];

function Preloader() {
  const { progress } = usePreloader();
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = textWrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    const textItem = wrapper.querySelector('.preloader__text__item') as HTMLElement;
    if (!textItem) return;

    const height = textItem.getBoundingClientRect().height;
    const gap = 2;
    container.style.height = `${height}px`;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < preloaderWords.length) {
        wrapper.style.transform = `translateY(${-(height + gap) * currentIndex}px)`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100 && preloaderRef.current) {
      gsap.to(preloaderRef.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: 'power2.out',
      });
    }
  }, [progress]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader__wrapper">
        <div className="preloader__text">
          <div ref={containerRef} className="preloader__text__container">
            <div ref={textWrapperRef} className="preloader__text__wrapper">
              {preloaderWords.map((word, index) => (
                <span key={index} className="preloader__text__item">
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="preloader__loader">
          <span
            className="preloader__loader__bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Preloader;
