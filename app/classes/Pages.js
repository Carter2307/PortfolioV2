import Components from './Components'
import Smoothscroll from '../utils/Smoothscroll'
import GSAP from 'gsap'
import { $ } from '../utils/selectors'
import Title from '../animation/Title'
import Paragraph from '../animation/Paragraph'

export default class Pages extends Components {
  constructor(elements) {
    super(elements)
    this.wrapper = $('.wrapper')
    this.device = {
      mobile: /mobile/i.test(navigator.userAgent),
      tablet: !/ipad|tablet/i.test(navigator.userAgent),
    }
  }

  load() {
    console.log('laod test')
    window.onload = () => {
      this.testDeviceForSmoothScroll()
    }
  }

  create() {
    this.testDeviceForSmoothScroll()
  }

  testDeviceForSmoothScroll() {
    if (this.device.mobile && this.device.tablet) {
      document.body.style.overflow = 'visible'
      document.body.style.position = 'relative'
    } else {
      console.log('test in smooth condition')
      this.smootscroll = new Smoothscroll(this.wrapper, {
        direction: 'v',
        smooth: 0.2,
      })
    }
  }

  createAnimation() {
    this.elements.titles.forEach((element) => {
      this.title = new Title(element)
      //Spliter(element)
    })

    this.elements.paragraphes.forEach((p) => {
      new Paragraph(p)
    })
  }

  show() {
    // this.el = {
    //   titles: [...$All('[data-animation="title"]')],
    //   paragraphes: [...$All('[data-animation="paragraph"]')],
    // }
    this.createAnimation()
  }

  hide() {
    return new Promise((resolve) => {
      this.animateOut = GSAP.timeline()

      this.animateOut.to(this.wrapper, {
        autoAlpha: 0,
        onComplete: resolve,
      })
    })
  }
}
