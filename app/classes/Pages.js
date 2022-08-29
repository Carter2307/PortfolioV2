import Components from './Components'
import Smoothscroll from '../utils/Smoothscroll'
import GSAP from 'gsap'
import { $ } from '../utils/selectors'

export default class Pages extends Components {
  constructor (elements) {
    super(elements)
    this.wrapper = $('.wrapper')
    this.device = {
      mobile: /mobile/i.test(navigator.userAgent),
      tablet: !/ipad|tablet/i.test(navigator.userAgent)
    }
  }

  create () {
    if (this.device.mobile && this.device.tablet) {
      document.body.style.overflow = 'visible'
      document.body.style.position = 'relative'
    } else {
      console.log('init smooth')
      this.smootscroll = new Smoothscroll(this.wrapper, { direction: 'v', smooth: 0.2 })
    }
  }

  show () {
    console.log('show')
  }

  hide () {
    console.log('hide')
    return new Promise((resolve) => {
      this.animateOut = GSAP.timeline()

      this.animateOut.to(this.wrapper, {
        autoAlpha: 0,
        onComplete: resolve
      })
    })
  }
}
