import Components from './Components'
import Smoothscroll from '../utils/Smoothscroll'
import GSAP from 'gsap'
import { $ } from '../utils/selectors'
import Title from '../animation/Title'
import Paragraph from '../animation/Paragraph'
export default class Pages {
  constructor(elements) {
    this.element = elements
    this.animateOut = GSAP.timeline()
  }

  create() {
    this.device = {
      mobile: /mobile/i.test(navigator.userAgent),
      tablet: !/ipad|tablet/i.test(navigator.userAgent),
    }

    if (this.device.mobile && this.device.tablet) {
      document.body.style.overflow = 'visible'
      document.body.style.position = 'relative'
    } else {
      window.setTimeout(() => {
        this.smootscroll = new Smoothscroll($('.wrapper'), {
          direction: 'v',
          smooth: 0.2,
        })
      }, 300)
    }
  }

  createAnimation() {
    this.elements = new Components(this.element).elements
    if (this.elements && this.elements.titles && this.elements.paragraphes) {
      this.elements.titles.forEach((element) => {
        this.title = new Title(element)
      })
      this.elements.paragraphes.forEach((p) => {
        new Paragraph(p)
      })
    }
  }

  show() {
    this.createAnimation()

    this.animateOut.to($('.wrapper'), {
      duration: 3,
      ease: 'power1.out',
      autoAlpha: 1,
      onComplete: () => {
        console.log('page was shown')
      },
    })
  }

  hide() {
    this.animateOut.to($('.wrapper'), {
      duration: 1,
      ease: 'power1.in',
      autoAlpha: 0,
      onComplete: () => {
        console.log('page was hide')
      },
    })
  }
}
