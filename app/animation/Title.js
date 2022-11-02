import Animation from '../classes/Animation'
import splittext from '../utils/splittext'
import GSAP from 'gsap'
export default class Title extends Animation{
  constructor(element) {
    super(element)
    this.element = element
    splittext(this.element, '<br>')
    splittext(this.element, '<br>')
    this.spans = this.element.querySelectorAll('span span')
  }

  animateIn() {
    GSAP.to(this.element, {
      duration: 0.4,
      opacity: 1,
    })

    GSAP.to(this.spans, {
      delay: .5,
      duration: 1.6,
      stagger: 0.2,
      ease: 'expo.inOut',
      y: '0%',
      opacity: 1,
    })
  }

  animateOut() {
    GSAP.to(this.element, {
      opacity: 0,
    })

    GSAP.set(this.spans, {
      delay: 0,
      duration: 1.6,
      opacity: 0,
      ease: 'expo.inOut',
      stagger: 0.1,
      y: '100%',
    })
  }
}

