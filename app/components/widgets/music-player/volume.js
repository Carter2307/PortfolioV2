import { clamp } from '../../../utils/function'

export default class Volume {
  constructor(container, grapper, slider, media) {
    this.container = container
    this.grapper = grapper
    this.containerBottom = this.container.getBoundingClientRect().bottom
    this.containerHeight = this.container.getBoundingClientRect().height
    this.containerTop = this.container.getBoundingClientRect().top
    this.slider = slider
    this.media = media
    this.isDown = false
    this.position = { start: 0, end: 0 }
    this.addEventListener()
  }

  onPointerDown(e) {
    e.preventDefault()
    this.isDown = true

    this.container.addEventListener(
      'pointermove',
      this.onPointerMove.bind(this)
    )
    this.container.addEventListener('pointerup', this.onPointerUp.bind(this))
  }

  onPointerMove(e) {
    e.preventDefault()
    if (!this.isDown && !this.isOutOfVolumeView(this.container)) return
    this.ratio = this.containerHeight - (e.pageY - this.containerTop)
    this.slider.style.height = `${clamp(
      (this.ratio / this.containerHeight) * 100,
      0,
      100
    )}%`
    this.media.volume = clamp(this.ratio / this.containerHeight, 0, 1)
  }

  onPointerUp() {
    this.isDown = false
  }

  isOutOfVolumeView(element) {
    element.onmouseleave = () => {
      return true
    }
  }

  addEventListener() {
    this.container.addEventListener(
      'pointerdown',
      this.onPointerDown.bind(this),
      false
    )
  }
}
