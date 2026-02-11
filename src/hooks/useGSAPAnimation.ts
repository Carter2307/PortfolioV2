import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { useIntersectionObserver } from './useIntersectionObserver';

interface AnimationConfig {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  duration?: number;
  delay?: number;
  ease?: string;
  triggerOnce?: boolean;
  threshold?: number;
}

export function useGSAPAnimation<T extends HTMLElement>(
  config: AnimationConfig = {}
): RefObject<T | null> {
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    duration = 1,
    delay = 0,
    ease = 'power2.out',
    triggerOnce = true,
    threshold = 0.1,
  } = config;

  const [ref, isIntersecting] = useIntersectionObserver<T>({
    threshold,
    triggerOnce,
  });

  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.set(element, from);
  }, [from, ref]);

  useEffect(() => {
    const element = ref.current;
    if (!element || !isIntersecting) return;
    if (triggerOnce && hasAnimated.current) return;

    gsap.to(element, {
      ...to,
      duration,
      delay,
      ease,
    });

    hasAnimated.current = true;
  }, [isIntersecting, to, duration, delay, ease, triggerOnce, ref]);

  return ref;
}

export function useGSAPStagger<T extends HTMLElement>(
  config: AnimationConfig & { stagger?: number } = {}
): RefObject<T | null> {
  const {
    from = { opacity: 0, y: 50 },
    to = { opacity: 1, y: 0 },
    duration = 1,
    delay = 0,
    ease = 'power2.out',
    stagger = 0.1,
    triggerOnce = true,
    threshold = 0.1,
  } = config;

  const [containerRef, isIntersecting] = useIntersectionObserver<T>({
    threshold,
    triggerOnce,
  });

  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.children;
    gsap.set(children, from);
  }, [from, containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isIntersecting) return;
    if (triggerOnce && hasAnimated.current) return;

    const children = container.children;
    gsap.to(children, {
      ...to,
      duration,
      delay,
      ease,
      stagger,
    });

    hasAnimated.current = true;
  }, [isIntersecting, to, duration, delay, ease, stagger, triggerOnce, containerRef]);

  return containerRef;
}

export default useGSAPAnimation;
