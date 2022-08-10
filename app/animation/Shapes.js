export default class Shapes {
  constructor ({ position, height, width, blur, background }) {
    this.top = position.top === -1 ? undefined : position.top
    this.left = position.left === -1 ? undefined : position.left
    this.right = position.right === -1 ? undefined : position.right
    this.bottom = position.bottom === -1 ? undefined : position.bottom
    this.height = height
    this.width = width
    this.blur = blur
    this.background = background

    this.init()
  }

  init () {
    this.createShape()
    this.events()
  }

  createShape () {
    this.shapeFrame = document.createElement('DIV')
    this.shapeFrame.className = 'shapes'
    this.id = 'shapes'

    // Style shape
    this.shapeFrame.style.height = this.height + 'px'
    this.shapeFrame.style.width = this.width + 'px'
    this.shapeFrame.style.borderRadius = this.height + 'px'
    this.shapeFrame.style.filter = `blur(${this.blur}px)`
    this.shapeFrame.style.backgroundColor = this.background
    this.shapeFrame.style.transition = 'all 8s'

    // set shape position
    this.shapeFrame.style.position = 'absolute'

    this.shapeFrame.style.top = this.top + 'px'
    this.shapeFrame.style.left = this.left + 'px'
    this.shapeFrame.style.right = this.right + 'px'
    this.shapeFrame.style.bottom = this.bottom + 'px'
  }

  animshapes (animationArr) {
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

  mountShape (parent) {
    parent.append(this.shapeFrame)
  }

  events () {

  }
}
