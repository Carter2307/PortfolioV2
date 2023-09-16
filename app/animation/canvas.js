import Components from '../classes/Components'
import { $ } from '../utils/selectors'
import Shapes from './Shapes'

export default class Canvas extends Components {
  constructor() {
    super()
    this.isMounted = false
    this.shapeGradient = '#00FF47'
    this.blur = 80
    this.init()
  }

  init() {
    this.mountFrame()
  }

  createFrame() {
    this.frame = document.createElement('DIV')
    this.frame.className = 'frame'
    this.frame.style.position = 'fixed'
    this.frame.style.top = 0
    this.frame.style.left = 0
    this.frame.style.width = `${window.innerWidth}px`
    this.frame.style.height = `${window.innerHeight}px`
    this.frame.style.filter = `blur(${this.blur}px)`
    this.frame.style.zIndex = '-1'
    this.frame.id = 'frame'
  }

  mountFrame() {
    this.createFrame()

    const size = [480, 768, 1024]
    const shape1 = new Shapes({
      position: {
        top: -300,
        right: -1,
        left: -300,
        bottom: -1,
      },
      height: size,
      width: size,
      background: this.shapeGradient,
      src: 'images/blur-pic.png',
    })
    const shape2 = new Shapes({
      position: {
        top: -1,
        right: -300,
        left: -1,
        bottom: -300,
      },
      height: size,
      width: size,
      background: this.shapeGradient,
      src: 'images/blur-pic.png',
    })

    this.frame.appendChild(shape1.shapeFrame)
    this.frame.appendChild(shape2.shapeFrame)
    document.body.append(this.frame)
    this.eventListener()
    this.isMounted = true
  }

  onResize(e) {
    e.preventDefault()
    this.mountedFrame = $('#frame')
    this.mountedFrame.style.width = `${window.innerWidth}px`
    this.mountedFrame.style.height = `${window.innerHeight}px`
  }

  eventListener() {
    window.addEventListener('resize', this.onResize.bind(this))
  }
}
