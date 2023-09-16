import Components from './Components'
//import Smoothscroll from '../utils/Smoothscroll'
import GSAP from 'gsap'
import { $, $All, $Attribute } from '../utils/selectors'
import Title from '../animation/Title'
import Paragraph from '../animation/Paragraph'
//import { ResizeObserver } from 'resize-observer'
import { Scale } from './../animation/Scale'

export default class Pages {
  constructor(elements) {
    this.element = elements
    this.animateOut = GSAP.timeline()
    this.wrapper = $('.wrapper')
  }

  init() {
    this.scaleAnimation = new Scale("[data-animation='scale']")
    document.body.style.overflow = 'visible'
    document.body.style.position = 'relative'
  }

  create() {
    const template = $All('[data-hide]')
    if (!template) return
    template.forEach((wrapper) => {
      const attributes = $Attribute(wrapper, 'data-hide').split(',')
      if (!attributes) return
      attributes.forEach((attr) => {
        const component = $(`.${attr.trim()}`)
        if (!component) return
        component.style.display = 'none'
      })
    })
  }

  createAnimation() {
    this.elements = new Components(this.element).elements
    if (this.elements && this.elements.titles && this.elements.paragraphes) {
      this.elements.titles.forEach((t) => {
        new Title(t)
      })
      this.elements.paragraphes.forEach((p) => {
        new Paragraph(p)
      })
    }
  }

  show() {
    this.createAnimation()

    this.animateOut.to($('.wrapper'), {
      duration: 2,
      ease: 'power1.out',
      autoAlpha: 1,
      onComplete: () => {
        console.log('page was shown')
      },
    })
  }

  hide() {
    console.log('hidden current page')

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
