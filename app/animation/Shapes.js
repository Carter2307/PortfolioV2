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
    this.shapeFrame.style.background = this.background

    // set shape position
    this.shapeFrame.style.position = 'absolute'

    this.shapeFrame.style.top = this.top + 'px'
    this.shapeFrame.style.left = this.left + 'px'
    this.shapeFrame.style.right = this.right + 'px'
    this.shapeFrame.style.bottom = this.bottom + 'px'
  }

  mountShape (parent) {
    parent.append(this.shapeFrame)
  }
}
