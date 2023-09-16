import { clamp } from '../../../utils/function'

export default class Volume {
  constructor(container, grapper, slider, media, volume) {
    this.container = container
    this.grapper = grapper
    this.containerBottom = this.container.getBoundingClientRect().bottom
    this.containerHeight = this.container.getBoundingClientRect().height
    this.containerTop = this.container.getBoundingClientRect().top
    this.slider = slider
    this.media = media
    this.initialValue = volume | 26
    this.position = { current: 0, target: 0 }
    this.step = 0.8
    this.slider.style.height = `calc(${this.initialValue}%)`
    this.media.volume = clamp(this.initialValue / this.containerHeight, 0, 1)

    this.onPointerDownHandler = this.onPointerDown.bind(this)
    this.onPointerMoveHandler = this.onPointerMove.bind(this)
    this.onPointerUpHandler = this.onPointerUp.bind(this)

    this.addEventListener()
  }

  onPointerDown(e) {
    e.stopPropagation()
    this.position.current = e.clientY
    document.body.style.cursor = 'ns-resize'
    window.addEventListener('pointerup', this.onPointerUpHandler)
    window.addEventListener('pointermove', this.onPointerMoveHandler)
  }

  onPointerMove(e) {
    e.preventDefault()
    e.stopPropagation()

    this.position.target = e.clientY
    const distance = this.position.current - this.position.target
    console.log(distance)
    if (distance !== 0) {
      if (distance > 0) {
        this.initialValue += this.step
      } else {
        this.initialValue -= this.step
      }

      this.slider.style.height = `calc(${clamp(this.initialValue, 0, 100)}%)`
      this.media.volume = clamp(this.initialValue / this.containerHeight, 0, 1)
    }

    this.position.current = this.position.target
  }

  onPointerUp(e) {
    e.preventDefault()
    e.stopPropagation()
    this.position.current = e.clientY
    document.body.style.cursor = 'default'
    window.removeEventListener('pointerdown', this.onPointerDownHandler)
    window.removeEventListener('pointermove', this.onPointerMoveHandler)
  }

  addEventListener() {
    this.container.addEventListener('pointerdown', this.onPointerDownHandler)
  }
}
