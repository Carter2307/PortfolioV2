import Components from '../../classes/Components'

export default class Slider extends Components {
  constructor () {
    super('slider')
    this.init()
  }

  init () {
    if (!this.elements.items) return

    this.child = [...this.elements.items.children]
    this.index = 1
    this.padding = 24
    this.currentPosition = 0
    this.treshold = 0
    this.dragIntervall = 80


    this.setChildWidth()
    this.setPosition()
    this.eventListener()
  }

  setChildWidth () {
    this.child.forEach(item => {
      item.style.flex = 'none'
      item.style.width = `${window.innerWidth * 0.80}px`
    })
  }

  setPosition () {
    this.width = this.elements.items.getBoundingClientRect().width
    this.currentPosition = -(((this.width - window.innerWidth - 24) / 2)) * this.index
    this.elements.items.style.transform = `translate3D(${this.currentPosition}px, 0, 0)`
    return this.currentPosition
  }

  next () {
    if (this.index >= this.child.length - 1) return
    this.index++
    if (this.index === 2) {
      this.width = this.elements.items.getBoundingClientRect().width
      this.currentPosition = -(((this.width - window.innerWidth) / 2)) * this.index
      this.elements.items.style.transform = `translate3D(${this.currentPosition - this.padding}px, 0, 0)`
    } else {
      this.setPosition()
    }
  }

  prev () {
    if (this.index <= 0) {
      this.index = 0
      return
    }
    this.index--
    if (this.index === 0) {
      this.width = this.elements.items.getBoundingClientRect().width
      this.currentPosition = -(((this.width - window.innerWidth - 24) / 2)) * this.index
      this.elements.items.style.transform = `translate3D(${this.padding}px, 0, 0)`
    } else {
      this.setPosition()
    }
  }

  onMouseDown (e) {
    e.preventDefault()
    this.isDown = true
    this.dragStart = e.x
    this.dragStarty = e.y
  }

  onMouseMove (e) {
    e.preventDefault()
    if (!this.isDown) return
    this.treshold = e.x - this.dragStart
    this.elements.items.style.transform = `translate3D(${this.currentPosition + this.treshold}px, 0, 0)`
  }

  onMouseUp (e) {
    e.preventDefault()

    if (this.treshold > 0 && this.treshold >= this.dragIntervall) {
      this.prev()
      console.log('prev')
    } else if (this.treshold < 0 && this.treshold <= -this.dragIntervall) {
      this.next()
      console.log('next')
    } else {
      this.elements.items.style.transform = `translate3D(${this.currentPosition}px, 0, 0)`
    }

    this.isDown = false
  }

  onWindowResize (e) {
    e.preventDefault()
    this.setChildWidth()
    this.setPosition()
  }

  eventListener () {
    this.elements.button.next.addEventListener('click', this.next.bind(this))
    this.elements.button.prev.addEventListener('click', this.prev.bind(this))

    this.elements.wrapper.addEventListener('pointerdown', this.onMouseDown.bind(this))
    this.elements.wrapper.addEventListener('pointermove', this.onMouseMove.bind(this))
    this.elements.wrapper.addEventListener('pointerup', this.onMouseUp.bind(this))

    addEventListener('resize', this.onWindowResize.bind(this))
  }
}
