import { $ } from '../utils/selectors'

export default class Alert {
  constructor(message, type) {
    this.message = message
    this.type = type
    this.init()
  }

  init() {
    this.create()
    this.self = $('.alert')
  }

  create() {
    this.div = document.createElement('DIV')
    this.div.className = 'alert'
    if (this.type === 'success') this.div.classList.add('alert__success')
    else this.div.classList.add('alert__error')

    // Create alert__wrapper
    const wrapper = createElement('DIV', 'alert__wrapper')
    // content
    const content = createElement('DIV', 'alert__content')
    // icons
    const icon = createElement('SPAN', 'alert__icon')
    // Message
    const message = createElement('P', 'alert__message')
    message.innerText = this.message
    // Close icon
    const closeIcon = createElement('SPAN', 'alert__closeIcon')
    const i = createElement('I', 'rob-close')
    closeIcon.append(i)
    closeIcon.onclick = () => {
      this.hide()
      this.destroy()
    }

    // appned child
    content.append(icon, message)
    wrapper.append(content, closeIcon)
    this.div.append(wrapper)
    document.body.prepend(this.div)
    this.self = this.div
    this.hide()

    function createElement(tag, className) {
      const element = document.createElement(tag)
      element.className = className
      return element
    }
  }

  show() {
    setTimeout(() => {
      this.self.style.right = '.5rem'
    }, 1000)
  }

  hide() {
    this.self.style.right = '-100%'
    this.self.transition = 'right .6s'
  }

  destroy() {
    document.body.removeChild(this.div)
  }
}
