import Components from '../classes/Components'
import { lerp } from './function'
import each from 'lodash/each'

export default class MagneticIMG extends Components {
  constructor() {
    super({
      element: '.menu__links__media',
      elements: {
        items: document.querySelectorAll("[data-snap='image']"),
        image: '.menu__links__media img',
      },
    })

    this.position = {
      currentx: window.innerWidth / 2,
      currenty: window.innerHeight / 2,
      targetx: 0,
      targety: 0,
    }
  }

  init() {
    this.addListener()
    this.update()
  }

  onMouseMove(e) {
    this.position.targetx = e.clientX
    this.position.targety = e.clientY
  }

  onMouseOver(e) {
    e.stopPropagation()
    this.element.style.opacity = 1
    this.changeImage(
      e.currentTarget,
      e.currentTarget.getAttribute('data-snap-image')
    )
  }

  onMouseOut(e) {
    e.stopPropagation()
    this.element.style.opacity = 0
  }

  addListener() {
    window.addEventListener('mousemove', this.onMouseMove.bind(this))

    each(this.elements.items, (item) => {
      item.addEventListener('mouseover', this.onMouseOver.bind(this))
      //item.addEventListener('mouseout', this.onMouseOut.bind(this))
    })
  }

  update() {
    this.position.currentx = lerp(
      this.position.currentx,
      this.position.targetx - this.element.offsetWidth / 2,
      0.1
    )
    this.position.currenty = lerp(
      this.position.currenty,
      this.position.targety - this.element.offsetHeight / 2,
      0.1
    )

    this.element.style.transform = `translate3d(${this.position.currentx}px, ${this.position.currenty}px, 0)`

    window.requestAnimationFrame(this.update.bind(this))
  }

  removeListener() {}

  changeImage(el, attr) {
    this.image = this.element.querySelector('img')
    if (this.image) {
      this.image.src = `/${attr}.png`
    }
  }
}
