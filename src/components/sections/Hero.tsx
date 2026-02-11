import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

function Hero() {
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({ triggerOnce: true });
  const titlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    titlesRef.current.forEach((title, index) => {
      if (title) {
        const spans = title.querySelectorAll('span');
        gsap.fromTo(
          spans,
          { y: '100%', opacity: 0 },
          {
            y: '0%',
            opacity: 1,
            duration: 1.6,
            delay: 0.5 + index * 0.2,
            stagger: 0.1,
            ease: 'expo.out',
          }
        );
      }
    });

    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: 'power2.out' }
      );
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="hero">
      <div className="hero__wrapper">
        <div className="hero__text">
          <h1 className="hero__title">
            <div
              ref={(el) => { titlesRef.current[0] = el; }}
              className="hero__title__child"
              data-animation="title"
            >
              <span><strong className="hero__title__highlight-green">Creative</strong></span>
              <span> frontend</span>
            </div>
            <div
              ref={(el) => { titlesRef.current[1] = el; }}
              className="hero__title__child"
              data-animation="title"
            >
              <span>developper and </span>
              <span><strong className="hero__title__highlight-gradient">ui</strong></span>
            </div>
            <div
              ref={(el) => { titlesRef.current[2] = el; }}
              className="hero__title__child"
              data-animation="title"
            >
              <span><strong className="hero__title__highlight-green">designer</strong></span>
              <span> from France</span>
            </div>
          </h1>
        </div>
        <p ref={descRef} className="hero__description" data-animation="paragraph">
          Hey i'm Roger Bentcha, I assist small companies
          and individuals in communicating with their customers
          by transforming their ideas into creative designs and code.
        </p>
        <div className="hero__quote">
          <div className="hero__quote__container">
            <p className="hero__quote__text" data-animation="paragraph">
              Don't let the noise of
              <span className="hero__title__highlight-green"> others' opinions</span> drown
              out your own <span className="hero__title__highlight-blue">inner voice.</span>
            </p>
            <span className="hero__quote__author" data-animation="paragraph">Steve Jobs</span>
            <span className="hero__quote__img">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
