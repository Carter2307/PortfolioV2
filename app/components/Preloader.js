import Components from '../classes/Components'
import imagesLoaded from 'imagesloaded'
//import autoBind from 'auto-bind'

export default class Preloader extends Components {
  constructor() {
    super('preloader')

    this.length = 0
    this.startIndex = 1

    this.size = {
      height: Number(this.elements.text[0].getBoundingClientRect().height),
      width: Number(this.elements.wrapper.clientWidth),
      gap: 2,
    }

    this.createPreloader()
    this.addEventListener()
  }

  createPreloader() {
    if (this.root.images) {
      const imgLoad = imagesLoaded(document.body)

      imgLoad.on('progress', () => {
        this.onProgress(imgLoad.images.length)
      })

      imgLoad.on('done', () => {
        //   setTimeout(() => {
        //     this.onLoad()
        //   }, 5000)
        this.onLoad()
      })
    }
  }

  animPreloaderText(e) {
    e.preventDefault()
    const length = this.elements.wrapper.children.length

    //Give the wrapper the height of the text
    this.elements.container.style.height = `${this.size.height}px`
    this.elements.container.style.width = `${this.size.width}px`

    window.setInterval(() => {
      if (this.startIndex < length) {
        this.elements.wrapper.style.top = `${
          (-this.size.height - this.size.gap) * this.startIndex
        }px`
        this.startIndex++
      }
    }, 1000)
  }

  onProgress(length) {
    this.length += 1
    const percent = this.length / length

    this.elements.loader.style.width = `${Math.round(percent * 100)}%`
  }

  onLoad() {
    this.emit('completed')
  }

  onResize(e) {
    this.size = {
      height: Number(this.elements.text[0].getBoundingClientRect().height),
      width: Number(this.elements.wrapper.clientWidth),
      gap: 2,
    }
    this.animPreloaderText(e)
  }

  addEventListener() {
    window.addEventListener(
      'DOMContentLoaded',
      this.animPreloaderText.bind(this)
    )
    window.addEventListener('resize', this.onResize.bind(this))
  }

  destroy() {
    this.elements.element.parentNode.removeChild(this.elements.element)
  }
}
