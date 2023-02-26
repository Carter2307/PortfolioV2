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
    this.initialValue = 26
    this.position = { current: 0, target: 0 }
    this.slider.style.height = `calc(${this.initialValue}%)`
    this.media.volume = clamp(this.initialValue / this.containerHeight, 0, 1)

    this.addEventListener()
  }

  onPointerDown(e) {
    e.preventDefault()
    this.isDown = true
    this.position.current = e.pageY
  }

  onPointerMove(e) {
    e.preventDefault()
    this.position.target = e.pageY
    this.diff =
      -this.position.target + this.position.current + this.initialValue
    if (!this.isDown && !this.isOutOfVolumeView(this.container)) return
    this.slider.style.height = `calc(${clamp(this.diff, 0, 100)}%)`
    this.media.volume = clamp(this.diff / this.containerHeight, 0, 1)
    console.log(this.diff)
  }

  onPointerUp() {
    this.isDown = false
    this.initialValue = this.diff
  }

  isOutOfVolumeView(element) {
    element.onmouseleave = () => {
      return true
    }
  }

  onMouseOut(e) {
    e.preventDefault()
    this.isDown = false
  }

  addEventListener() {
    this.container.addEventListener(
      'pointerdown',
      this.onPointerDown.bind(this),
      false
    )

    this.container.addEventListener(
      'pointermove',
      this.onPointerMove.bind(this)
    )
    this.container.addEventListener('pointerup', this.onPointerUp.bind(this))
    this.container.addEventListener('mouseleave', this.onMouseOut.bind(this))
  }
}
