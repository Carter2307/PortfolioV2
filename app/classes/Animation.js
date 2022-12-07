import Components from './Components'

export default class Animation extends Components {
  constructor(element) {
    super(element)
    this.element = element
    this.createObserver()
  }

  createObserver() {
    this.observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateIn()
        } else {
          this.animateOut()
        }
      })
    })
    this.observer.observe(this.element)
  }
}
