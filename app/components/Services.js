import Components from '../classes/Components'

export default class Services extends Components {
  constructor() {
    super('services')
    this.init()
  }

  init() {
    this.buttons = [...this.elements.buttons]
    this.eventListener()
  }

  onClick(e) {
    e.preventDefault()
    const button = e.currentTarget
    this.type = button.getAttribute('data-service')
    console.log(button)
    this.root.modal.dataServiceInput.value = this.type
    this.root.modal.self.classList.add('modal-visible')
  }

  closeModal(e) {
    e.preventDefault()
    if (this.root.modal.self.classList.contains('modal-visible')) {
      this.root.modal.self.classList.remove('modal-visible')
    }
  }

  eventListener() {
    this.buttons.forEach((button) => {
      button.addEventListener('click', this.onClick.bind(this))
    })

    this.root.modal.button.addEventListener('click', this.closeModal.bind(this))
  }
}
