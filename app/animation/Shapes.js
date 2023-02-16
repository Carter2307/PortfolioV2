export default class Shapes {
  constructor({ position, height, width, blur, background }) {
    this.top = position.top === -1 ? undefined : position.top
    this.left = position.left === -1 ? undefined : position.left
    this.right = position.right === -1 ? undefined : position.right
    this.bottom = position.bottom === -1 ? undefined : position.bottom
    this.height = height
    this.width = width
    this.blur = blur
    this.background = background
    this.windowWidth = window.innerWidth

    this.init()
  }

  init() {
    this.createShape()
    this.onWindowResize()
    this.events()
  }

  createShape() {
    this.shapeFrame = document.createElement('DIV')
    this.shapeFrame.className = 'shapes'
    this.id = 'shapes'

    this.testBreakpoint()
    // style
    this.shapeFrame.style.borderRadius = this.height[2] + 'px'
    this.shapeFrame.style.backgroundColor = this.background
    // this.shapeFrame.style.transition = 'all 8s'
    this.shapeFrame.style.position = 'absolute'

    // set shape position
    this.shapeFrame.style.top = this.top + 'px'
    this.shapeFrame.style.left = this.left + 'px'
    this.shapeFrame.style.right = this.right + 'px'
    this.shapeFrame.style.bottom = this.bottom + 'px'
  }

  animshapes(animationArr) {
    let index = 0
    let animFlow = null

    setInterval(() => {
      if (index >= animationArr.length) index = 0
      animFlow = animationArr[index]
      this.shapeFrame.style.top = animFlow.to.top + 'px'
      this.shapeFrame.style.left = animFlow.to.left + 'px'
      this.shapeFrame.style.bottom = animFlow.to.bottom + 'px'
      this.shapeFrame.style.right = animFlow.to.right + 'px'
      this.shapeFrame.style.filter = `blur(${this.blur}px)`

      index++
    }, 4000)
  }

  mountShape(parent) {
    parent.append(this.shapeFrame)
  }

  onWindowResize() {
    this.windowWidth = window.innerWidth
    this.testBreakpoint()
  }

  testBreakpoint() {
    if (this.windowWidth >= 640 && this.windowWidth < 1024) {
      this.shapeFrame.style.height = this.height[1] + 'px'
      this.shapeFrame.style.width = this.width[1] + 'px'
    } else if (this.windowWidth >= 1024) {
      this.shapeFrame.style.height = this.height[2] + 'px'
      this.shapeFrame.style.width = this.width[2] + 'px'
    } else {
      this.shapeFrame.style.height = this.height[0] + 'px'
      this.shapeFrame.style.width = this.width[0] + 'px'
    }
  }

  events() {
    addEventListener('resize', this.onWindowResize.bind(this))
  }
}
