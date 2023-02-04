import Components from '../classes/Components'
import { $ } from '../utils/selectors'
import Shapes from './Shapes'

export default class Canvas extends Components {
  constructor() {
    super()
    this.isMounted = false
    this.shapeGradient = '#00FF47'
    this.init()
  }

  init() {
    this.mountFrame()
    if (!this.isMounted) return
    const shape1 = new Shapes({
      position: {
        top: -100,
        right: -1,
        left: -100,
        bottom: -1,
      },

      height: [280, 380, 480],
      width: [280, 380, 480],
      blur: [200, 300],
      background: this.shapeGradient,
    })
    const shape2 = new Shapes({
      position: {
        top: -1,
        right: -100,
        left: -1,
        bottom: -100,
      },
      height: [280, 380, 480],
      width: [280, 380, 480],
      blur: [200, 300],
      background: this.shapeGradient,
    })
    shape1.mountShape($('#frame'))
    shape2.mountShape($('#frame'))
  }

  createFrame() {
    this.frame = document.createElement('DIV')
    this.frame.className = 'frame'
    this.frame.style.position = 'fixed'
    this.frame.style.top = 0
    this.frame.style.left = 0
    this.frame.style.width = `${window.innerWidth}px`
    this.frame.style.height = `${window.innerHeight}px`
    this.frame.style.zIndex = '-1'
    this.frame.id = 'frame'
  }

  mountFrame() {
    this.createFrame()
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
