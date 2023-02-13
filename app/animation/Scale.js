import { $All } from '../utils/selectors'

export class Scale {
  constructor(element) {
    this.elements = $All(element)
    this.init()
  }

  init() {
    this.eventListener()
  }

  scaleUp(e) {
    const element = e.currentTarget
    element.style.transform = `scale(1)`
  }

  scaleDown(e) {
    const element = e.currentTarget
    element.style.transform = `scale(.8)`
  }

  eventListener() {
    this.elements.forEach((element) => {
      element.addEventListener('mousedown', this.scaleDown.bind(this))
      element.addEventListener('mouseup', this.scaleUp.bind(this))
    })
  }
}
