import { lerp, clamp } from './function'
import normalizeWheel from 'normalize-wheel'

export default class Smoothscroll {
  constructor (element, opts) {
    this.element = element

    this.defaultOptions = {
      direction: 'v', // v: vertical or  v- : vertical bottom to top;  h: Horizontal or h- horizontal right to left
      smooth: 0.1 // Smooth amount -> Lerp function
    }
    this.smoothOptions = Object.assign(this.defaultOptions, {
      ...opts
    })

    this.init()
  }

  init () {
    this.scroll = {
      current: 0,
      target: 0,
      limit: 0
    }
    this.offsetHeight = this.element.getBoundingClientRect().top

    this.scroll.limit = (this.element.clientHeight + this.offsetHeight) - window.innerHeight

    this.addListener()
    this.update()
  }

  onMouseWheel (e) {
    const event = normalizeWheel(e)

    if (
      this.smoothOptions.direction === 'v' ||
      this.smoothOptions.direction === 'v-'
    ) {
      this.scroll.target += event.pixelY
    } else if (
      this.smoothOptions.direction === 'h' ||
      this.smoothOptions.direction === 'h-'
    ) {
      this.scroll.target += event.pixelX
    }
  }

  onResize () {
    this.offsetHeight = this.element.getBoundingClientRect().top
    this.scroll.limit = (this.element.clientHeight + this.offsetHeight) - window.innerHeight
  }

  addListener () {
    window.addEventListener('wheel', this.onMouseWheel.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))
  }

  update () {
    this.scroll.target = clamp(this.scroll.target, 0, this.scroll.limit)
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.smoothOptions.smooth
    )

    if (this.scroll.current < 0.01) {
      this.scroll.current = 0
    }

    this.translateByCase()
    window.requestAnimationFrame(this.update.bind(this))
  }

  translateByCase () {
    switch (this.smoothOptions.direction) {
      case 'v':
        this.element.style.transform = `translate3D(0, -${Math.floor(this.scroll.current)}px , 0)`
        break

      case 'v-':
        this.element.style.transform = `translate3D(0, ${Math.floor(this.scroll.current)}px, 0)`
        break

      case 'h':
        this.element.style.transform = `translateX(-${this.scroll.current}px)`
        break

      case 'h-':
        this.element.style.transform = `translateX(${this.scroll.current}px)`
        break
    }
  }
}
